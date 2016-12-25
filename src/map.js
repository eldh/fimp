import {curry} from './curry'

export const map = curry((fn, data) => data.map(fn))
