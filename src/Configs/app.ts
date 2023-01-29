interface AppConfig {
  host: string
  port: number
  environment: EnvironmentEnum
}

const enum EnvironmentEnum {
  DEV = 'develop',
  TEST = 'test',
  PROD = 'production',
}

const appConfig: AppConfig = {
  host: process.env.HOST as string,
  port: Number((process.env.PORT as string) || '3000'),
  environment: process.env.NODE_ENV as EnvironmentEnum,
}

export default appConfig
