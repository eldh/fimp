import {curry} from './curry'

export const skip = curry((val, data) => data.skip(val))
