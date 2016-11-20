import {fromJS, is} from 'immutable'
import {map, reduce, filter, flatten, find, some, get, set, compose} from '../src/index.js'
import {test} from 'ava'

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

const shallowFlatten = flatten(true)
test('shallow flatten', (t) => {
  t.true(is(shallowFlatten(fromJS([1, 2, [3, 4, [5, 6]]])), fromJS([1, 2, 3, 4, [5, 6]])))
})

const deeperFlatten = flatten(2)
test('deeper flatten', (t) => {
  t.true(is(deeperFlatten(fromJS([1, 2, [3, 4, [5, [6]]]])), fromJS([1, 2, 3, 4, 5, [6]])))
})

const deepFlatten = flatten(false)
test('deep flatten', (t) => {
  t.true(is(deepFlatten(fromJS([1, 2, [3, 4, [5, [6]]]])), fromJS([1, 2, 3, 4, 5, 6])))
})

const findEven = find((val) => !(val % 2))
test('find', (t) => {
  t.is(findEven(fromJS([1, 4, 3])), 4)
})

const someEven = some((val) => !(val % 2))
test('some', (t) => {
  t.true(someEven(fromJS([1, 4, 3])))
})
