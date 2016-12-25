import {curry} from './curry'

export const take = curry((val, data) => data.take(val))
