import {fromJS, is} from 'immutable'
import {
  map, reduce, filter, flatten, find, some, get, set, compose,
  concat, contains, entrySeq, curry, every, keySeq, reverse,
  skip, skipLast, sort, take, takeLast, valueSeq,
} from '../src/index.js'
import {test} from 'ava'

const isEven = (val) => !(val % 2)

const user = fromJS({
  id: 1,
  name: 'Bengt',
  address: {
    street: 'Simborgargatan 12',
  },
  info: {
    foo: 'bar',
  },
})

const sum = reduce((total, a) => a + total, 0)
test('reduce', (t) => {
  t.is(sum(fromJS([1, 2, 3])), 6)
})

const filterEven = filter((a) => !(a % 2))
test('filter', (t) => {
  t.true(is(filterEven(fromJS([1, 2, 3])), fromJS([2])))
})

const add5 = map((a) => a + 5)
test('map', (t) => {
  t.true(is(add5(fromJS([1, 2, 3])), fromJS([6, 7, 8])))
})

test('compose and pass in data', (t) => {
  t.is(compose(add5, filterEven, sum, fromJS([1, 2, 3])), 14)
})

test('curried compose of map, filter, reduce', (t) => {
  const add5FilterEvenSum = compose(add5, filterEven, sum)
  t.is(add5FilterEvenSum(fromJS([1, 2, 3])), 14)
})

const getInfo = get(['info'])
const getAddress = get(['address'])
const getStreet = get(['street'])
const getAddressStreet = compose(getAddress, getStreet) // get(['address', 'street'])
const setStreet = set(['address', 'street'])
const updatedUser = setStreet('Kungsgatan 5', user)

test('get', (t) => {
  t.true(is(getAddress(user), fromJS({street: 'Simborgargatan 12'})))
})
test('set', (t) => {
  const updatedUser = setStreet('Kungsgatan 5', user)
  t.is(updatedUser.getIn(['id']), 1)
  t.is(updatedUser.getIn(['info']), user.getIn(['info']))
  t.is(updatedUser.getIn(['address', 'street']), 'Kungsgatan 5')
})
test('compose getter', (t) => {
  t.is(getAddressStreet(user), 'Simborgargatan 12')
})
test('identity of untouched', (t) => {
  t.true(getInfo(updatedUser) === getInfo(user))
})

test('shallow flatten', (t) => {
  const shallowFlatten = flatten(true)
  t.true(is(shallowFlatten(fromJS([1, 2, [3, 4, [5, 6]]])), fromJS([1, 2, 3, 4, [5, 6]])))
})

test('deeper flatten', (t) => {
  const deeperFlatten = flatten(2)
  t.true(is(deeperFlatten(fromJS([1, 2, [3, 4, [5, [6]]]])), fromJS([1, 2, 3, 4, 5, [6]])))
})

test('deep flatten', (t) => {
  const deepFlatten = flatten(false)
  t.true(is(deepFlatten(fromJS([1, 2, [3, 4, [5, [6]]]])), fromJS([1, 2, 3, 4, 5, 6])))
})

test('concat', (t) => {
  const concat456 = concat(fromJS([4, 5, 6]))
  t.deepEqual(
    [1, 2, 3, 4, 5, 6],
    concat456(fromJS([1, 2, 3])).toJS()
  )
})

test('contains', (t) => {
  const containsA = contains('a')
  t.true(containsA(fromJS(['a', 'b', 'c'])))
  t.false(containsA(fromJS(['b', 'c', 'd'])))
})

test('curry', (t) => {
  const subtract = curry((a, b) => b - a)
  const subtract2 = subtract(2)
  t.is(1, subtract2(3))
  t.is(1, subtract(2, 3))
})

test('entrySeq', (t) => {
  t.deepEqual(
    entrySeq(fromJS({a: 'foo', b: 'bar', c: 'baz'})).toJS(),
    [['a', 'foo'], ['b', 'bar'], ['c', 'baz']]
  )
})

test('every', (t) => {
  const allEven = every(isEven)
  t.false(allEven(fromJS([1, 4, 3])))
  t.true(allEven(fromJS([2, 4, 100])))
})

test('filter', (t) => {
  const filterEven = filter(isEven)
  t.deepEqual(
    filterEven(fromJS([1, 2, 3, 4, 5, 6, 7, 8])).toJS(),
    [2, 4, 6, 8]
  )
})

test('find', (t) => {
  const findEven = find(isEven)
  t.is(findEven(fromJS([1, 4, 3])), 4)
})

test('keySeq', (t) => {
  t.deepEqual(
    keySeq(fromJS({a: 'foo', b: 'bar', c: 'baz'})).toJS(),
    ['a', 'b', 'c']
  )
})

test('map', (t) => {
  const squareMap = map((v) => v * v)
  t.deepEqual(squareMap(fromJS([1, 2, 3])).toJS(), [1, 4, 9])
})

test('reduce', (t) => {
  const sum = reduce((a, b) => a + b, 0)
  t.is(sum(fromJS([1, 2, 3, 4, 5, 6])), 21)
})

test('reverse', (t) => {
  t.deepEqual(
    reverse(fromJS([1, 2, 3, 4, 5])).toJS(),
    [5, 4, 3, 2, 1]
  )
})

test('skip', (t) => {
  const skip3 = skip(3)
  t.deepEqual(
    skip3(fromJS([1, 2, 3, 4, 5])).toJS(),
    [4, 5]
  )
})

test('skipLast', (t) => {
  const skipLast3 = skipLast(3)
  t.deepEqual(
    skipLast3(fromJS([1, 2, 3, 4, 5])).toJS(),
    [1, 2]
  )
})

test('some', (t) => {
  const someEven = some((val) => !(val % 2))
  t.true(someEven(fromJS([1, 4, 3])))
})

test('sort', (t) => {
  const sortHighest = sort((a, b) => b - a)
  t.deepEqual(
    sortHighest(fromJS([100, 20, 3, 44, 5])).toJS(),
    [100, 44, 20, 5, 3]
  )
})

test('take', (t) => {
  const take3 = take(3)
  t.deepEqual(
    take3(fromJS([1, 2, 3, 4, 5])).toJS(),
    [1, 2, 3]
  )
})

test('takeLast', (t) => {
  const takeLast3 = takeLast(3)
  t.deepEqual(
    takeLast3(fromJS([1, 2, 3, 4, 5])).toJS(),
    [3, 4, 5]
  )
})

test('valueSeq', (t) => {
  t.deepEqual(
    valueSeq(fromJS({a: 'foo', b: 'bar', c: 'baz'})).toJS(),
    ['foo', 'bar', 'baz']
  )
})
