import {curry} from './curry'

export const filter = curry((fn, data) => data.filter(fn))
