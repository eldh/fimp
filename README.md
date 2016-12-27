# Fimp
## Functional Immutable Programming

Fimp helps you work with [Immutable.js](https://facebook.github.io/immutable-js/) data structures in a more functional way. Think of it as [Ramda](http://ramdajs.com) or [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide) for Immutable.

### Documentation
Fimp provides composable, curried, data-last functions that work with immutable objects. If you are used to functional programming you are hopefully thinking "Nice, this makes sense, I can use this". If not, you might be thinking "Why would I want this?".

The aim of Fimp is to help you write cleaner, more understandable code. Composable functions makes it easier to create more complex functions by combining smaller building blocks. [this article, explaining the rationale behind Ramda](http://fr.umio.us/why-ramda/) applies to Fimp as well. The only difference is that Fimp is built for use with Immutable data structures, whereas Ramda is used with plain javascript object.

The following functions are supported:

#### `compose`
```js
  const add5 = map((a) => a + 5)
  const filterEven = filter((a) => !(a % 2))
  const sum = reduce((total, a) => a + total, 0)
  const addFilterAndSum = compose(sum, filterEven, add5)

  addFilterAndSum(fromJS([1, 2, 3]) // 14
```

#### `concat`
```js
  const concat456 = concat(fromJS([4, 5, 6]))
  concat456(fromJS([1, 2, 3])).toJS() // [1, 2, 3, 4, 5, 6]
```

#### `contains`
```js
  const containsA = contains('a')
  containsA(fromJS(['a', 'b', 'c'])) // true
```

#### `curry`
```js
  const subtract = curry((a, b) => b - a)
  const subtract2 = subtract(2)
  subtract2(3) // 1
  subtract(2, 3) // 1
```

#### `entrySeq`
```js
  entrySeq(fromJS({a: 'foo', b: 'bar', c: 'baz'})).toJS()
  // [['a', 'foo'], ['b', 'bar'], ['c', 'baz']]
```

#### `every`
```js
  const allEven = every(isEven)
  allEven(fromJS([1, 4, 8])) // false
  allEven(fromJS([2, 4, 100])) // true
```

#### `filter`
```js
  const filterEven = filter(isEven)
  filterEven(fromJS([1, 2, 3, 4, 5, 6, 7, 8])).toJS() // [2, 4, 6, 8]
```

#### `find`
```js
  const findEven = find(isEven)
  findEven(fromJS([1, 4, 3])) // 4
```

#### `flatten`
```js
  const shallowFlatten = flatten(true)
  shallowFlatten(fromJS([1, 2, [3, 4, [5, 6]]])) // List [1, 2, 3, 4, [5, 6]]
  })

  const deeperFlatten = flatten(2)
  deeperFlatten(fromJS([1, 2, [3, 4, [5, [6]]]])) // List [1, 2, 3, 4, 5, [6]]
  })

  const deepFlatten = flatten(false)
  deepFlatten(fromJS([1, 2, [3, 4, [5, [6]]]])) //[1, 2, 3, 4, 5, 6])
```

#### `get`
```js
  const user = fromJS({
    id: 1,
    address: {
      street: 'Simborgargatan 12',
    },
  })
  const getAddress = get(['address'])
  getAddress(user) // Map {street: 'Simborgargatan 12'}
```

#### `keySeq`
```js
  keySeq(fromJS({a: 'foo', b: 'bar', c: 'baz'})).toJS() //['a', 'b', 'c']
```

#### `map`
```js
  const add5 = map((a) => a + 5)
  add5(fromJS([1, 2, 3])) // List [6, 7, 8]
```

#### `reduce`
```js
  const sum = reduce((a, b) => a + b, 0)
  sum(fromJS([1, 2, 3, 4, 5, 6])) // 21
```

#### `reverse`
```js
  reverse(fromJS([1, 2, 3, 4, 5])).toJS() //[5, 4, 3, 2, 1]
```

#### `set`
```js
const user = fromJS({
  id: 1,
  address: {
    street: 'Simborgargatan 12',
  },
})
  const setStreet = set(['address', 'street']) // Map user
```

#### `skip`
```js
  const skip3 = skip(3)
  skip3(fromJS([1, 2, 3, 4, 5])).toJS() // [4, 5]
```

#### `skipLast`
```js
  const skipLast3 = skipLast(3)
  skipLast3(fromJS([1, 2, 3, 4, 5])).toJS() // [1, 2]
```

#### `some`
```js
  const someEven = some(isEven)
  someEven(fromJS([1, 4, 3])) // true
```

#### `sort`
```js
  const sortHighest = sort((a, b) => b - a)
  sortHighest(fromJS([100, 20, 3, 44, 5])).toJS() // [100, 44, 20, 5, 3]
```

#### `take`
```js
const take3 = take(3)
take3(fromJS([1, 2, 3, 4, 5])).toJS() // [1, 2, 3]
```

#### `takeLast`
```js
  const takeLast3 = takeLast(3)
  takeLast3(fromJS([1, 2, 3, 4, 5])).toJS() // [3, 4, 5]
```

#### `valueSeq`
```js
  valueSeq(fromJS({a: 'foo', b: 'bar', c: 'baz'})).toJS() // ['foo', 'bar', 'baz']
```
