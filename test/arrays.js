(function(){
	if (typeof QUnit == 'undefined')
		QUnit = require('qunit-cli');
	
	var seq = typeof require == 'function' ? require('..') : window.seq;


	QUnit.module('Arrays');
	
	QUnit.test('isEmpty', function(assert) {
		assert.deepEqual([1, 2, 3].isEmpty(), false, 'return false if array is not empty');
		assert.deepEqual([].isEmpty(), true, 'returns true if the array is empty');
	});

	QUnit.test('frist and head', function(assert) {
		assert.equal([1, 2, 3].first(), 1, 'return first element of an array');
		assert.deepEqual([1, 2, 3].first(2), [1, 2], 'return first n elements');

		assert.equal([1, 2, 3].head(), 1, 'return first element of an array');
		assert.deepEqual([1, 2, 3].head(2), [1, 2], 'return first n elements');

		assert.strictEqual([].first, [].head, 'they are equivalent');
	});


	QUnit.test('last', function(assert) {
		assert.equal([1, 2, 3].last(), 3, 'return last element of an array');
		assert.deepEqual([1, 2, 3].last(2), [2, 3], 'return last n elements');
	});


	QUnit.test('tail', function(assert) {
		assert.deepEqual([1, 2, 3].tail(), [2, 3], 'returns all elements except the first element');
	});


	QUnit.test('drop', function(assert) {
		assert.deepEqual([1, 2, 3].drop(2), [1, 3], 'remove specific element of array');
	});


	QUnit.test('unique', function(assert) {
		assert.deepEqual([1, 2, 1, 3, 1, 4].unique(), [1, 2, 3, 4], 'return unique values of an unsorted array');
	});


	QUnit.test('intersection', function(assert) {
		assert.deepEqual([1, 1, 2, 3].intersection([2, 3, 4]), [2, 3], 'return values of intersection array');
	});


	QUnit.test('diff', function(assert) {
		assert.deepEqual([1, 2, 3].diff([2, 3, 4]), [1], 'returns the values of difference between arrays');
	});


	QUnit.test('range', function(assert) {
		assert.deepEqual(seq.range(0), [], 'generates an array empty');

		assert.deepEqual(seq.range(3), [0, 1, 2], 'range with a single positive argument generates an array of elements 0,1,2,...,n-1');
		assert.deepEqual(seq.range(1, 3), [1, 2], 'range with two arguments creates an array where the first argument is the beginning and the second is the last element minus one (n-1)');
		assert.deepEqual(seq.range(0, 6, 2), [0, 2, 4], 'range with three arguments to create an array where the third argument is the interval between the elements');
	});


	QUnit.test('max', function(assert) {
		assert.equal([2, 4, 5, 1, 3].max(), 5, 'return values max of array');
	});


	QUnit.test('min', function(assert) {
		assert.equal([2, 4, 5, 1, 3].min(), 1, 'return values min of array');
	});


	QUnit.test('average', function(assert) {
		assert.equal([1, 2].average(), 1.5, 'return average of array');
	});


	QUnit.test('median', function(assert) {
		assert.equal([1, 2, 3, 4, 5].median(), 3, 'return median of array');
	});


	QUnit.test('sum', function(assert) {
		assert.equal(seq.range(101).sum(), 5050, 'return sum of array');
	});


	QUnit.test('product', function(assert) {
		assert.equal([1, 2, 3, 4].product(), 24, 'return product of array');
	});


	QUnit.test('counter', function(assert) {
		assert.deepEqual(["a", "a", "a", "b", "c", "b"].counter().constructor.name, "Object", 'return object with counter of array');
	});


	QUnit.test('flatten', function(assert) {
		assert.deepEqual([[1,2],[3,4],[5,6]].flatten(), [1, 2, 3, 4, 5, 6], 'return new array flattened');
	});


	QUnit.test('zip', function(assert) {
		var names = ['moe', 'larry', 'curly'], ages = [30, 40, 50];

		assert.deepEqual([30, 40, 50].zip(['moe', 'larry', 'curly']), [['moe', 30], ['larry', 40], ['curly', 50]], 'zipped together arrays of different lengths');
	});


	QUnit.test('groupBy', function(assert) {
		assert.deepEqual(['one', 'two', 'three'].groupBy('length').constructor.name, "Object", 'return object with group of a specific feature');
	});


	QUnit.test('filterNot', function(assert) {
		var strong = [-1, 1, -2, 2].filterNot(function(x){
			return x > 0;
		});
		assert.deepEqual(strong, [-1, -2], 'return values that not filter');
	});
})();