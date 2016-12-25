import {curry} from './curry'

export const sort = curry((fn, data) => data.sort(fn))
