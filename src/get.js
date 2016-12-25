import {curry} from './curry'

export const get = curry((path, data) => data.getIn(path))
