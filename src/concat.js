import {curry} from './curry'

export const concat = curry((a, b) => b.concat(a))
