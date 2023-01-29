export default (target: Function) => {
  for (const key of Object.getOwnPropertyNames(target.prototype)) {
    // maybe blacklist constructor here
    const descriptor = Object.getOwnPropertyDescriptor(target.prototype, key)
    if (descriptor) {
      const method = descriptor.value

      descriptor.value = async (...args: any[]) => {
        try {
          await method.apply(target, args)
        } catch (e) {
          const [, , next] = args
          next(e)
        }
      }

      Object.defineProperty(target.prototype, key, descriptor)
    }
  }
}
