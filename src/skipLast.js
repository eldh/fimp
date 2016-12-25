import {curry} from './curry'

export const skipLast = curry((val, data) => data.skipLast(val))
