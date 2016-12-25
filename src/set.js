import {curry} from './curry'

export const set = curry((path, val, data) => data.setIn(path, val))
