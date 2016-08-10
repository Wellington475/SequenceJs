# Sequence [![Build Status](https://travis-ci.org/Wellington475/SequenceJs.svg?branch=master)](https://travis-ci.org/Wellington475/SequenceJs)
Sequence is a library javascript(vanilla/pure) to functional programming
____
Sequence is a library javascript(vanilla/pure) that provides a "wrapper" for axillary in creating applications using functional programming techniques.

Sequence came not to reinvent the wheel or subistituir what already exists. The purpose of the Sequence is complete the default JavaScript library (which is ambudante), putting new features commonly used in functional programming.
---
## Using(_Array_):

#### isEmpty:

returns true if the array is empty

```javascript
[1, 2, 3].isEmpty()
false
[].isEmpty()
true
```

#### first:

returns the first or the n elements of an array

```javascript
[1, 2, 3].first() /* or [1, 2, 3].head() */
1
[1, 2, 3].first(2) /* or [1, 2, 3].head(2) */
[1, 2]
```

#### last:

returns the last or the n elements of an array

```javascript
[1, 2, 3].last()
3
[1, 2, 3].last(2)
[2, 3]
```

#### tail:

returns all elements except the first element

```javascript
[1, 2, 3].tail()
[2, 3]
```

#### drop:

remove specific element of array

```javascript
[1, 2, 3].drop(2)
[1, 3]
```

#### unique:

return unique values of an unsorted array

```javascript
[1, 2, 1, 3, 1, 4].unique()
[1, 2, 3, 4]
```

#### intersection:

return values of intersection array

```javascript
[1, 1, 2, 3].intersection([2, 3, 4])
[2, 3]
```

#### diff:

returns the values of difference between arrays

```javascript
[1, 2, 3].diff([2, 3, 4])
[1]
```

#### range:

range with a single positive argument generates an array of elements(0, 1, 2, ..., n-1)

```javascript
seq.range(3)
[0, 1, 2]
seq.range(1, 3)
[1, 2]
seq.range(0, 6, 2)
[0, 2, 4]
```

#### max:

return values max of array

```javascript
[2, 4, 5, 1, 3].max()
5
```

#### min:

return values min of array

```javascript
[2, 4, 5, 1, 3].min()
1
```

#### average:

return average of array

```javascript
[1, 2].average()
1.5
```

#### median:

return median of array

```javascript
[1, 2, 3, 4, 5].median()
3
```

#### sum:

return sum of array

```javascript
seq.range(101).sum()
5050
```

#### product:

return product of array

```javascript
[1, 2, 3, 4].product()
24
```

#### counter:

return object with counter of array

```javascript
["a", "a", "a", "b", "c", "b"].counter()
Object {a: 3, b: 2, c: 1}
```

#### flatten:

return new array flattened

```javascript
[[1,2],[3,4],[5,6]].flatten()
[1, 2, 3, 4, 5, 6]
```

#### zip:

zipped together arrays of different lengths

```javascript
[30, 40, 50].zip(['moe', 'larry', 'curly'])
[['moe', 30], ['larry', 40], ['curly', 50]]
```

#### groupBy:

return object with group of a specific feature

```javascript
['one', 'two', 'three'].groupBy('length')
Object {3: ['one', 'two'], 5: ['three']}

[{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}].groupBy('age')
Object {'40': [{'name':'moe', 'age':40}],'50': [{'name':'larry', 'age':50}],'60': [{'name':'curly', 'age':60}]}
```

#### filterNot:

return values that not filter

```javascript
[-1, 1, -2, 2].filterNot(function(x){
    return x > 0;
})
[-1, -2]
```

## Using(_String_):


#### lambda:

return result of function that the transform the expression in an anonymous function

```javascript
"(2 + 4) * 2".lambda()
12
"(_ + 4) * 2".lambda()(2)
12
"x -> (x + 4) * 2".lambda()(2)
12
"x -> y -> (x + y) * x".lambda()(2)(4)
12
```

### LICENSE
This project is licensed under the MIT License. This means you can use and modify it for free in private or commercial projects.


### Development

It is required node.js and npm

* [Node.js](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/)  


	$ git clone https://github.com/Wellington475/SequenceJs
	$ npm install
	$ npm test
