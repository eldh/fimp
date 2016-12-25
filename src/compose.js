import {Iterable} from 'immutable'

const isImmutable = (data) => Iterable.isIterable(data)
export const compose = (...args) => {
  const fns = Array.prototype.slice.call(args, 0, args.length - 1)
  const data = args[args.length - 1]
  return isImmutable(data) ?
    fns.reduce((d, fn) => fn(d), data) :
    (...more) => compose(...args, ...more)
}
