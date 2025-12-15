// Configuration for frontend import restrictions

export const frontendStateImports = {
  files: ['frontend/state/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/backend', '**/backend/**'],
            message: 'frontend files cannot import from backend directory.'
          },
          {
            group: ['**/prototype', '**/prototype/**'],
            message: 'frontend files cannot import from prototype directory.'
          },
          {
            group: ['**/reactView', '**/reactView/**'],
            message: 'frontend files cannot import from reactView directory.'
          },
          {
            group: ['**/scripts', '**/scripts/**'],
            message: 'frontend files cannot import from scripts directory.'
          },
        ]
      }
    ]
  }
}