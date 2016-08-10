(function(){
	if (typeof QUnit == 'undefined')
		QUnit = require('qunit-cli');
	
	var seq = typeof require == 'function' ? require('..') : window.seq;


	QUnit.module('Strings');
	
	QUnit.test('lambda', function(assert) {
		assert.deepEqual("(2 + 4) * 2".lambda(), 12, 'return result of function that the transform the expression in an anonymous function');

		assert.deepEqual("(_ + 4) * 2".lambda()(2), 12, 'passing parameter to the expression that will be converted into anonymous function and executed');

		assert.deepEqual("x -> (x + 4) * 2".lambda()(2), 12, 'passing parameter using letters to the expression that will be converted into anonymous function and executed');

		assert.deepEqual("x -> y -> (x + y) * x".lambda()(2)(4), 12, 'passing multiple parameter using letters to the expression that will be converted into anonymous function and executed');
	});
})();