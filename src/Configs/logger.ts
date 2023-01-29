import { LoggerOptions } from 'pino'

const loggerConfig: LoggerOptions = {
  level: (process.env.LOG_LEVEL as string) || 'info',
  transport:
    (process.env.LOG_PRETTY_PRINT as string) === 'true'
      ? {
          target: 'pino-pretty',
        }
      : undefined,
}

export default loggerConfig
