// Custom rule to detect non-ASCII characters

export const noNonAsciiRule = {
  'no-non-ascii': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Disallow non-ASCII characters in code',
        category: 'Possible Errors',
        recommended: false,
      },
      fixable: null,
      schema: [],
      messages: {
        nonAsciiString: 'Non-ASCII characters found in string literal: "{{value}}"',
        nonAsciiIdentifier: 'Non-ASCII characters found in identifier: "{{name}}"',
        nonAsciiComment: 'Non-ASCII characters found in comment',
        nonAsciiTemplate: 'Non-ASCII characters found in template literal: "{{value}}"',
      },
    },
    create(context) {
      const sourceCode = context.getSourceCode()

      // Check for non-ASCII characters (anything outside 0x00-0x7F range)
      function hasNonAscii(text) {
        return /[^\x00-\x7F]/.test(text)
      }

      // Extract non-ASCII characters for display
      function getNonAsciiChars(text) {
        return text.match(/[^\x00-\x7F]/g) || []
      }

      return {
        // Check string literals
        Literal(node) {
          if (typeof node.value === 'string' && hasNonAscii(node.value)) {
            const nonAsciiChars = getNonAsciiChars(node.value).join(', ')
            context.report({
              node,
              messageId: 'nonAsciiString',
              data: {
                value: `${node.value} (contains: ${nonAsciiChars})`
              }
            })
          }
        },

        // Check template literals
        TemplateLiteral(node) {
          const templateValue = sourceCode.getText(node)
          if (hasNonAscii(templateValue)) {
            const nonAsciiChars = getNonAsciiChars(templateValue).join(', ')
            context.report({
              node,
              messageId: 'nonAsciiTemplate',
              data: {
                value: `${templateValue} (contains: ${nonAsciiChars})`
              }
            })
          }
        },

        // Check identifiers (variable names, function names, etc.)
        Identifier(node) {
          if (hasNonAscii(node.name)) {
            const nonAsciiChars = getNonAsciiChars(node.name).join(', ')
            context.report({
              node,
              messageId: 'nonAsciiIdentifier',
              data: {
                name: `${node.name} (contains: ${nonAsciiChars})`
              }
            })
          }
        },

        // Check comments
        Program() {
          const comments = sourceCode.getAllComments()
          comments.forEach(comment => {
            if (hasNonAscii(comment.value)) {
              const nonAsciiChars = getNonAsciiChars(comment.value).join(', ')
              context.report({
                node: comment,
                messageId: 'nonAsciiComment',
                data: {
                  chars: nonAsciiChars
                }
              })
            }
          })
        }
      }
    }
  }
}