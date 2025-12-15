// Configuration for backend import restrictions

export const backendImports = {
  files: ['backend/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/frontend', '**/frontend/**'],
            message: 'backend files cannot import from frontend directory.'
          },
          {
            group: ['**/scripts', '**/scripts/**'],
            message: 'backend files cannot import from scripts directory.'
          },
        ]
      }
    ]
  }
}