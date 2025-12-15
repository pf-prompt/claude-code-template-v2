export interface InjectableInstances {
  __injectInstance(key: string): Record<string, unknown>
}

export function isInjectableInstances(obj: unknown): obj is InjectableInstances {
  const maybeInjectable = obj as (InjectableInstances | undefined)
  if (maybeInjectable?.__injectInstance) {
    return true
  }
  return false
}

export interface ExportableInstances {
  __exportInstances(): Record<string, unknown>
}

export function isExportableInstances(obj: unknown): obj is ExportableInstances {
  const maybeExportable = obj as (ExportableInstances | undefined)
  if (maybeExportable?.__exportInstances) {
    return true
  }
  return false
}

export function instances<ComponentOptions extends object, T>(
  initStateFn: (options: ComponentOptions) => T
) {
  const instanceStates:Record<string, T> = {}

  const generateKey = (options: ComponentOptions): string => {
    const sorted = Object.entries(options).sort()
    return JSON.stringify(sorted)
  }

  return {
    getState(options: ComponentOptions): T {
      const key = generateKey(options)
      let instanceState: T = instanceStates[key]
      if (instanceState === undefined) {
        instanceState = initStateFn(options)
        instanceStates[key] = instanceState
      }
      return instanceState
    },
    __injectInstance(key: string) {
      let instanceState: T = instanceStates[key]
      if (instanceState === undefined) {
        instanceState = initStateFn(Object.fromEntries(JSON.parse(key)) as ComponentOptions)
        instanceStates[key] = instanceState
      }
      return instanceState
    },
    __exportInstances(): Record<string, unknown> {
      return instanceStates
    }
  }
}