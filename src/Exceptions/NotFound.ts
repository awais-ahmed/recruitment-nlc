import ExceptionHandler from '@app/Exceptions/Handler'

export default class NotFound extends ExceptionHandler {
  constructor() {
    super('Resource not found', 404, 'NOT_FOUND')
  }
}
