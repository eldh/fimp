import {curry} from './curry'

export const every = curry((fn, data) => data.every(fn))
