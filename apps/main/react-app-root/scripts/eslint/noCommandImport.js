/**
 * ESLint rule to restrict imports of 'command' from 'ccstate' package
 */

export const noCommandImport = {
  'no-command-import': {
    meta: {
      type: 'problem',
      docs: {
        description: 'Disallow importing "command" from ccstate package',
        category: 'Best Practices',
        recommended: false
      },
      fixable: null,
      schema: [],
      messages: {
        noCommandImport: 'Importing "command" from ccstate is not allowed in this directory. Use alternative state management patterns instead.'
      }
    },
    create(context) {
      return {
        ImportDeclaration(node) {
          // Check if importing from 'ccstate'
          if (node.source && node.source.value === 'ccstate') {
            // Check if 'command' is being imported
            const commandImport = node.specifiers.find(specifier => {
              return (
                specifier.type === 'ImportSpecifier' &&
                specifier.imported.name === 'command'
              )
            })

            if (commandImport) {
              context.report({
                node: commandImport,
                messageId: 'noCommandImport'
              })
            }
          }
        }
      }
    }
  }
}