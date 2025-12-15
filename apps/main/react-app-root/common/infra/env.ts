 
export const IN_NODE = typeof process !== 'undefined' && process.versions?.node
export const DEBUG_LOGGERS: readonly string[] = (process.env.VITE_DEBUG || '').split(',')
export const IN_TEST = false