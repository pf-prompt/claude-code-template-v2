// eslint-disable no-console
import type { ParameterizedString } from '@sentry/core'
import * as Sentry from '@sentry/react'
import { DEBUG_LOGGERS } from './env'

interface StructuredLogger {
  readonly fmt: typeof Sentry.logger.fmt
  readonly debug: typeof Sentry.logger.debug

  readonly info: typeof Sentry.logger.info

  readonly warn: typeof Sentry.logger.warn

  readonly error: typeof Sentry.logger.error

  readonly fatal: typeof Sentry.logger.fatal
  isDebug: boolean
}

const LOGGERS: Partial<Record<string, StructuredLogger>> = {}

type _ParameterizedString = {
  __sentry_template_string__?: string;
  __sentry_template_values__?: unknown[];
}

function formatParameterizedString(ps: ParameterizedString): string {
  if (typeof ps === 'string') {
    return ps
  }

  const typedPs = ps as _ParameterizedString

  const template = typedPs.__sentry_template_string__ || ''
  const values = typedPs.__sentry_template_values__ || []

  let result = template
  let index = 0
  result = result.replace(/%s/g, () => {
    const value = values[index++]
    return value !== undefined ? String(value) : '%s'
  })

  return result
}

const shouldDuplicateLogToConsole = process.env['VITE_DO_NOT_DUPLICATE_LOG_TO_CONSOLE'] !== 'true'

export function logger(name: string): StructuredLogger {
  if (LOGGERS[name]) {
    return LOGGERS[name]
  }

  const logger: StructuredLogger = {
    fmt: Sentry.logger.fmt,
    isDebug: DEBUG_LOGGERS.includes(name),
    debug(message, attributes, cap) {
      if (this.isDebug) {
        Sentry.logger.debug(message, attributes, cap)
        if (shouldDuplicateLogToConsole) {
          const formatted = `[D][${name}] ${formatParameterizedString(message)}`
          console.debug(formatted)
        }
      }
    },
    info: (message, attributes, cap) => {
      Sentry.logger.info(message, attributes, cap)
      if (shouldDuplicateLogToConsole) {
        const formatted = `[I][${name}] ${formatParameterizedString(message)}`
        console.info(formatted)
      }
    },
    warn: (message, attributes, cap) => {
      Sentry.logger.warn(message, attributes, cap)
      if (shouldDuplicateLogToConsole) {
        const formatted = `[W][${name}] ${formatParameterizedString(message)}`
        console.warn(formatted)
      }
    },
    error: (message, attributes, cap) => {
      Sentry.logger.error(message, attributes, cap)
      if (shouldDuplicateLogToConsole) {
        const formatted = `[E][${name}] ${formatParameterizedString(message)}`
        console.error(formatted)
      }
    },
    fatal: (message, attributes, cap) => {
      Sentry.logger.fatal(message, attributes, cap)
      if (shouldDuplicateLogToConsole) {
        const formatted = `[F][${name}] ${formatParameterizedString(message)}`
        console.error(formatted)
      }
    }
  }

  LOGGERS[name] = logger

  return logger
}

export function listLoggers() {
  return Object.keys(LOGGERS)
}
