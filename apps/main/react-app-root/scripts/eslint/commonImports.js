// Configuration for ccstatex import restrictions

export const commonImports = {
  files: ['common/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/backend', '**/backend/**'],
            message: 'ccstatex files cannot import from backend directory.'
          },
          {
            group: ['**/frontend', '**/frontend/**'],
            message: 'ccstatex files cannot import from frontend directory.'
          },
          {
            group: ['**/scripts', '**/scripts/**'],
            message: 'ccstatex files cannot import from scripts directory.'
          },
        ]
      }
    ]
  }
}
