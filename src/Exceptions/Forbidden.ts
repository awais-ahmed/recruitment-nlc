import ExceptionHandler from '@app/Exceptions/Handler'

export default class Forbidden extends ExceptionHandler {
  constructor() {
    super('The user is not authorized to access the resource.', 403, 'FORBIDDEN')
  }
}
