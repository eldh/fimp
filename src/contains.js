import {curry} from './curry'

export const contains = curry((val, data) => data.contains(val))
