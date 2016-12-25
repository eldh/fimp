import {curry} from './curry'

export const flatten = curry((opt, data) => data.flatten(opt))
