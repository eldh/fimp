export function curry(fn, ...args) {
  const curryFn = (fnArgs) => {
    if (fnArgs.length >= fn.length) {
      return fn.apply(this, fnArgs)
    }
    return (...cArgs) => curryFn([...fnArgs, ...cArgs])
  }
  return curryFn(args)
}
