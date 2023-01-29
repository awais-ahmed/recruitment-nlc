import pino from 'pino'

import { LoggerConfig } from '@app/Configs'

const logger = pino(LoggerConfig)

export default logger
