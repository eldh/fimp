import {Iterable} from 'immutable'
import curry from 'lodash.curry'

export const map = curry((fn, data) => data.map(fn))
export const sort = curry((fn, data) => data.sort(fn))
export const find = curry((fn, data) => data.find(fn))
export const some = curry((fn, data) => data.some(fn))
export const flatten = curry((opt, data) => data.flatten(opt))
export const reduce = curry((fn, init, data) => data.reduce(fn, init))
export const filter = curry((fn, data) => data.filter(fn))
export const get = curry((path, data) => data.getIn(path))
export const set = curry((path, val, data) => data.setIn(path, val))

const isImmutable = (data) => Iterable.isIterable(data)
export const compose = (...args) => {
  const fns = Array.prototype.slice.call(args, 0, args.length - 1)
  const data = args[args.length - 1]
  return isImmutable(data) ?
    fns.reduce((d, fn) => fn(d), data) :
    (...more) => compose(...args, ...more)
}
