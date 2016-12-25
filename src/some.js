import {curry} from './curry'

export const some = curry((fn, data) => data.some(fn))
