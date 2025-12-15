import { createStore, type Getter, type Setter } from 'ccstate'
import { apiRegistry } from './apiRegistry'

import { command } from 'ccstate'

type AfterTestHook = () => (Promise<void> | void)

export const testHooks = {
  beforeTest: command(async (): Promise<AfterTestHook> => {
    const afterTest = async() => {}
    return afterTest
  })
}

// Registry to track all modules and tests
interface TestInfo {
  name: string
  moduleName: string
  testFn: (store: { get: Getter, set: Setter }) => void | Promise<void>
}

interface ModuleInfo {
  name: string
  tests: TestInfo[]
}

interface TestResult {
  moduleName: string
  testName: string
  passed: boolean
  error?: Error
  runtime: number
}

class TestRegistry {
  private modules: Map<string, ModuleInfo> = new Map()
  private currentModule: string | null = null

  // Register a module
  module(name: string): void {
    if (!this.modules.has(name)) {
      this.modules.set(name, {
        name,
        tests: [],
      })
    }
    this.currentModule = name
  }

  // Register a test within current module
  test(name: string, testFn: (store: { get: Getter, set: Setter }) => void | Promise<void>): void {
    if (!this.currentModule) {
      throw new Error('Cannot register test without an active module. Call registerModule first.')
    }

    const moduleInfo = this.modules.get(this.currentModule)!
    moduleInfo.tests.push({
      name,
      moduleName: this.currentModule,
      testFn
    })
  }

  // Get all registered modules
  getModules(): string[] {
    return Array.from(this.modules.keys())
  }

  // Get tests for a specific module
  getTestsForModule(moduleName: string): string[] {
    const moduleInfo = this.modules.get(moduleName)
    return moduleInfo ? moduleInfo.tests.map(t => t.name) : []
  }

  // Get all tests across all modules
  getAllTests(): Array<{moduleName: string, testName: string}> {
    const allTests: Array<{moduleName: string, testName: string}> = []
    for (const [moduleName, moduleInfo] of this.modules) {
      for (const test of moduleInfo.tests) {
        allTests.push({
          moduleName,
          testName: test.name
        })
      }
    }
    return allTests
  }

  // Execute registered tests with optional filtering
  async executeTests(moduleFilter?: string, testFilter?: string): Promise<TestResult[]> {
    const results: TestResult[] = []

    for (const [moduleName, moduleInfo] of this.modules) {
      // Skip module if filter doesn't match
      if (moduleFilter && moduleFilter !== 'all' && moduleName !== moduleFilter) {
        continue
      }

      console.log(`Module: ${moduleName}`)

      for (const testInfo of moduleInfo.tests) {
        // Skip test if filter doesn't match
        if (testFilter && testFilter !== 'all' && testInfo.name !== testFilter) {
          continue
        }

        console.log(`  Test: ${testInfo.name}`)

        const startTime = Date.now()
        let passed = false
        let error: Error | undefined

        try {
          const store = createStore()
          apiRegistry.useDirectRoute = store.get
          const afterTest = await store.set(testHooks.beforeTest)
          try {
            await testInfo.testFn(store)
          } finally {
            try {
              await afterTest()
            } catch(e3) {
              console.log('afterTest hook throw', e3)
            }
          }
          passed = true
          const runtime = Date.now() - startTime
          console.log(`  PASS: ${testInfo.name} (${runtime}ms)`)
        } catch (e) {
          error = e instanceof Error ? e : new Error(String(e))
          const runtime = Date.now() - startTime
          console.log(`  FAIL: ${testInfo.name} (${runtime}ms)`)
          console.log(`    Error: ${error.message}`)
          if (error.stack) {
            console.log(`    ${error.stack}`)
          }
        }

        results.push({
          moduleName,
          testName: testInfo.name,
          passed,
          error,
          runtime: Date.now() - startTime
        })
      }
    }

    return results
  }

  // Clear all registered modules and tests
  clear(): void {
    this.modules.clear()
    this.currentModule = null
  }

  // Get registry stats
  getStats(): {moduleCount: number, testCount: number} {
    let testCount = 0
    for (const moduleInfo of this.modules.values()) {
      testCount += moduleInfo.tests.length
    }
    return {
      moduleCount: this.modules.size,
      testCount
    }
  }
}

// Create global registry instance
export const testRegistry = new TestRegistry()