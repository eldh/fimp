import {curry} from './curry'

export const reduce = curry((fn, init, data) => data.reduce(fn, init))
