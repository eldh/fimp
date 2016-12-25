import {curry} from './curry'

export const find = curry((fn, data) => data.find(fn))
