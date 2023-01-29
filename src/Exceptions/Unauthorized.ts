import ExceptionHandler from '@app/Exceptions/Handler'

export default class Unauthorized extends ExceptionHandler {
  constructor() {
    super('You aren’t authenticated, please reauthenticate and try again.', 401, 'UNAUTHORIZED')
  }
}
