// Custom ESLint rule to restrict usage of useState, useEffect, useMemo in frontend files
export const restrictReactHooks = {
  rules: {
    'no-react-hooks': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Restrict usage of useState, useEffect, and useMemo in frontend files',
          category: 'Best Practices',
          recommended: false,
        },
        fixable: null,
        schema: [],
      },
      create(context) {
        const restrictedHooks = ['useState', 'useEffect', 'useMemo'];

        return {
          CallExpression(node) {
            // Check for direct calls like useState()
            if (node.callee.type === 'Identifier' && restrictedHooks.includes(node.callee.name)) {
              context.report({
                node,
                message: `Usage of '${node.callee.name}' is restricted in frontend files. Consider using ccstate for state management instead.`,
              });
            }

            // Check for member expression calls like React.useState()
            if (
              node.callee.type === 'MemberExpression' &&
              node.callee.object.type === 'Identifier' &&
              node.callee.object.name === 'React' &&
              node.callee.property.type === 'Identifier' &&
              restrictedHooks.includes(node.callee.property.name)
            ) {
              context.report({
                node,
                message: `Usage of 'React.${node.callee.property.name}' is restricted in frontend files. Consider using ccstate for state management instead.`,
              });
            }
          },
          ImportDeclaration(node) {
            if (node.source.value === 'react') {
              node.specifiers.forEach(specifier => {
                if (specifier.type === 'ImportSpecifier' && restrictedHooks.includes(specifier.imported.name)) {
                  context.report({
                    node: specifier,
                    message: `Import of '${specifier.imported.name}' is restricted in frontend files. Consider using ccstate for state management instead.`,
                  });
                }
              });
            }
          },
        };
      },
    },
  },
};