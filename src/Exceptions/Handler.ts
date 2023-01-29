import { Response } from 'express'

import { Logger } from '@app/Utils'

interface ResponseError {
  message: string
  code: string
}

export default class ExceptionHandler extends Error {
  public statusCode: number
  public code: string

  constructor(message: string, statusCode = 500, code = 'GENERIC_ERROR') {
    super(message)

    this.statusCode = statusCode
    this.code = code
  }

  public static getStatusCode(error: Error): number {
    return error['statusCode'] || 500
  }

  public static getResponse(error: Error): ResponseError {
    return {
      message: error.message,
      code: error['code'] || 'GENERIC_ERROR',
    }
  }

  public static handle(error: Error | ExceptionHandler, response: Response) {
    Logger.error(error.message)

    response.status(ExceptionHandler.getStatusCode(error))
    response.json(ExceptionHandler.getResponse(error))
  }
}
