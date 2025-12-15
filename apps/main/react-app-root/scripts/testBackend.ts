#!/usr/bin/env node

import process from 'node:process'
import { setupMockSecrets } from '../backend/setupMockSecrets'
import { setupTestHooks } from '../backend/setupTestHooks'
import { parseArgs } from 'node:util'
import { regressionTests } from '../common/infra/regressionTests'
import '../frontend/tests/backendTests'

interface ParsedArgs {
  values: {
    module?: string
    test?: string
    help?: boolean
  }
}

function showHelp(): void {
  console.log(`
Regression Test Executor for Backend

Usage: node testBackend.js [options]

Options:
  --module <name>    Run tests for specific module (default: 'all')
  --test <name>      Run specific test (default: 'all')
  --help            Show this help message

Examples:
  node testBackend.js --module math
  node testBackend.js --module hello --test "basic test"
  node testBackend.js --test "specific test name"
`)
}

async function main() {
  // Parse command line arguments
  const { values } = parseArgs({
    options: {
      module: {
        type: 'string',
        short: 'm',
        default: 'all'
      },
      test: {
        type: 'string',
        short: 't',
        default: 'all'
      },
      help: {
        type: 'boolean',
        short: 'h'
      }
    }
  }) as ParsedArgs

  // Show help if requested
  if (values.help) {
    showHelp()
    process.exit(0)
  }

  // Extract options with defaults
  const options = {
    module: values.module || 'all',
    test: values.test || 'all'
  }

  console.log('Starting regression test execution...')
  console.log(`Configuration: module="${options.module}", test="${options.test}"`)
  setupMockSecrets()
  setupTestHooks()

  // Execute regression tests
  const result = await regressionTests(options)

  // Exit with appropriate code
  if (result.success) {
    console.log('\nRegression tests completed successfully!')
    process.exit(0)
  } else {
    console.log('\nRegression tests failed!')
    process.exit(1)
  }
}

main().catch(console.error)