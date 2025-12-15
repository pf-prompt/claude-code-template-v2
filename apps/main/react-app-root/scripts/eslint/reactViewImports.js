// Configuration for reactView import restrictions

export const reactViewImports = {
  files: ['reactView/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/backend', '**/backend/**'],
            message: 'reactView files cannot import from backend directory.'
          },
          {
            group: ['**/scripts', '**/scripts/**'],
            message: 'reactView files cannot import from scripts directory.'
          },
        ]
      }
    ]
  }
}