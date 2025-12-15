import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import importPlugin from 'eslint-plugin-import'
import { globalIgnores } from 'eslint/config'
import { noNonAsciiRule } from './scripts/eslint/noNonAsciiRule.js'
import { backendImports } from './scripts/eslint/backendImports.js'
import { reactViewImports } from './scripts/eslint/reactViewImports.js'
import { frontendStateImports } from './scripts/eslint/frontendStateImports.js'
import { commonImports } from './scripts/eslint/commonImports.js'
import { prototypeImports } from './scripts/eslint/prototypeImports.js'
import { restrictReactHooks } from './scripts/eslint/restrictReactHooks.js'
import { noCommandImport } from './scripts/eslint/noCommandImport.js'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      // 'custom': {
      //   rules: noNonAsciiRule
      // },
      'unused-imports': unusedImports,
      'import': importPlugin
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['./tsconfig.react.json']
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    },
    rules: {
      // 'custom/no-non-ascii': 'error',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          'vars': 'all',
          'varsIgnorePattern': '^_',
          'args': 'after-used',
          'argsIgnorePattern': '^_'
        }
      ],
      'react-refresh/only-export-components': 'off',
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single', { 'avoidEscape': true }],
      'semi': ['error', 'never'],
      // Import path validation
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error'
    }
  },
  // Restrict imports for backend directory
  backendImports,
  // Restrict imports for reactView directory
  reactViewImports,
  // Restrict imports for frontend/state directory
  frontendStateImports,
  // Restrict imports for common directory
  commonImports,
  // Restrict imports for frontend/prototype directory
  prototypeImports,
  // Restrict command imports in frontend/state files
  {
    files: ['frontend/state/**/*.{ts,tsx}'],
    plugins: {
      'no-command': {
        rules: noCommandImport
      }
    },
    rules: {
      'no-command/no-command-import': 'error'
    }
  },
  // Enable React hooks with proper linting in frontend files
  {
    files: ['frontend/**/*.{ts,tsx}'],
    plugins: {
      'restrict-hooks': restrictReactHooks
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'restrict-hooks/no-react-hooks': 'error',
    }
  },
])
