# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kencruz/lotide`

**Require it:**

`const _ = require('@kencruz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Gets the first element of array. 
* `tail(array)`: Gets all but the first element of array. 
* `middle(array)`: Gets middle position element(s) of an array.
* `without(source, itemsToRemove)`: Creates an array excluding all given values using.
* `countLetters(string)`: Returns an object of character count of a string.
* `countOnly(allItems, itemsToCount)`: Returns an object of items counted by a filter list.
* `findKey(object, callback)`: Returns the key if callback evaluating the key is true.
* `findKeyByValue(object, value)`: Returns first key that matches the value, if not found it returns undefined.
* `flatten(array)`: Returns a flattened array.
* `letterPositions(string)`: Returns an object with keys of characters paired with values of their index positions from a string input.
* `map(array, callback)`: Returns an array of processed values from an array which each element ran through a callback.
* `takeUntil(array, callback)`: Returns a slice of an array when callback returns true with the last evaluated index.
* `without(source, itemsToRemove)`: Returns an array with removed items from a filter list.
