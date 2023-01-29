import dotenv from 'dotenv'

dotenv.config()

import DatabaseConfig from './database'
import LoggerConfig from './logger'
import AppConfig from './app'

export { DatabaseConfig, LoggerConfig, AppConfig }
