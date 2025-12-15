import { testRegistry } from './testRegistry'

export async function regressionTests(options: {
    module: string,
    test: string
}): Promise<{
    success: boolean
    total: number
    passed: number
    failed: number
    runtime: number
    timestamp: string
    options: {
        module: string
        test: string
    }
}> {
  const startTime = Date.now()

  console.log(`Running tests - Module: ${options.module}, Test: ${options.test}`)

  // Get registry stats for debugging
  const stats = testRegistry.getStats()
  console.log(`Registry stats: ${stats.moduleCount} modules, ${stats.testCount} tests`)

  // Log available modules and tests
  const availableModules = testRegistry.getModules()
  console.log(`Available modules: ${availableModules.join(', ')}`)

  if (options.module !== 'all' && !availableModules.includes(options.module)) {
    console.warn(`Warning: Module '${options.module}' not found in registry`)
  }

  console.log(`\nStarting test run with ${stats.testCount} tests\n`)

  // Execute registered tests with filtering
  const results = await testRegistry.executeTests(options.module, options.test)

  // Calculate summary statistics
  const total = results.length
  const passed = results.filter(r => r.passed).length
  const failed = total - passed
  const runtime = Date.now() - startTime

  // Print summary by module
  const moduleStats = new Map<string, {passed: number, total: number}>()
  for (const result of results) {
    const stats = moduleStats.get(result.moduleName) || {passed: 0, total: 0}
    stats.total++
    if (result.passed) {
      stats.passed++
    }
    moduleStats.set(result.moduleName, stats)
  }

  console.log('\n')
  for (const [moduleName, stats] of moduleStats) {
    const status = stats.passed === stats.total ? 'PASS' : 'FAIL'
    console.log(`Module ${status}: ${moduleName} - ${stats.passed}/${stats.total} tests passed`)
  }

  // Print final summary
  console.log('\nTest run completed:')
  console.log(`Total: ${total}`)
  console.log(`Passed: ${passed}`)
  console.log(`Failed: ${failed}`)
  console.log(`Runtime: ${runtime}ms`)

  if (failed === 0) {
    console.log('\nAll tests passed!')
  } else {
    console.log(`\n${failed} test(s) failed`)
  }

  return {
    success: failed === 0,
    total,
    passed,
    failed,
    runtime,
    timestamp: new Date().toISOString(),
    options: options,
  }
}