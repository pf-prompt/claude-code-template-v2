// Configuration for backend import restrictions

export const prototypeImports = {
  files: ['frontend/prototype/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['**/backend', '**/backend/**'],
            message: 'prototype files cannot import from backend directory.'
          },
          {
            group: ['**/reactView', '**/reactView/**'],
            message: 'prototype files cannot import from reactView directory.'
          },
          {
            group: ['**/frontend', '**/frontend/**'],
            message: 'prototype files cannot import from reactView directory.'
          },
          {
            group: ['**/scripts', '**/scripts/**'],
            message: 'prototype files cannot import from scripts directory.'
          },
        ]
      }
    ]
  }
}