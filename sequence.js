(function() {
	'use strict';

	var seq = {};

	/**
	 * Using:
	 * >> seq.range(10)
	 * [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	 * 
	 * >> seq.range(5, 10)
	 * [5, 6, 7, 8, 9]
	 * 
	 * >> seq.range(2, 10, 2)
	 * [2, 4, 6, 8]
	 */
	seq.range = function(min, max, variance){
		var arr = [];

		if(arguments.length === 1){
			for(var i = 0; i < min; i++)
				arr.push(i);
		}
		if(arguments.length === 2){
			var stepCount = (max - min);
			for(var i = 0; i < stepCount; i++)
				arr.push(i + min);
		}
		else{
			var stepCount = Math.floor((max - min)/variance);
			for(var i = 0; i < stepCount; i++){
				arr.push(i * variance + min)
			}
			
		}

		return arr;
	}


	/**
	 * Using:
	 * >> seq.random(1, 5)
	 * 1.0159633898340594
	 * >> seq.random(1, 5)
	 * 2.699965720463025
	 * 
	 */
	seq.random = function(min, max){
		return Math.random() * (max - min) + min;
	}


	/**
	 * Using:
	 * >> seq.randomInt(1, 5)
	 * 5
	 * >> seq.randomInt(1, 5)
	 * 1
	 * 
	 */
	seq.randomInt = function(min, max){
		return Math.floor(Math.random() * (max - min + 1) + min);
	}


	/**
	 * Using:
	 * >> [1, 2, 3].head() or [1, 2, 3].first()
	 * 1
	 * >> [1, 2, 3].head(2) or [1, 2, 3].first(2)
	 * [1, 2]
	 */
	Array.prototype.head = Array.prototype.first = function(n){
		var result = [];
		if(n != null)
			result = this.slice(0, n);
		else
			result =  this[0];

		return result;
	}


	/**
	 * Using:
	 * >> [1, 2, 3].last()
	 * 3
	 */
	Array.prototype.last = function(n){
		var len = this.length;
		if(n != null)
			return this.slice((this.length-n), this.length)
		return this[len-1];
	}


	/**
	 * Using:
	 * >> [1, 2, 3].tail()
	 * [2, 3]
	 */
	Array.prototype.tail = function(){
		this.shift();
		
		return this;
	}


	/**
	 * Using:
	 * >> seq.range(2).cartesian(seq.range(2))
	 * [[0, 0], [0, 1], [1, 0], [1, 1]]
	 */
	Array.prototype.cartesian = function(sequence){
		return [].concat.apply([], this.map(function(x){
			return [].concat.apply([], sequence.map(function(y)	{
				return [[x, y]];
			}))
		}));
	}


	/**
	 * Using:
	 * >> [1, 2, 3].drop(2)
	 * [1, 3]
	 */
	Array.prototype.drop = function(elem){
		var index = this.indexOf(elem);
		this.splice(index, 1);

		return this;
	}


	/**
	 * Using:
	 * >> [1, 1, 2, 3, "a", "a", "b"].unique()
	 * [1, 2, 3, "a", "b"]
	 */
	Array.prototype.unique = function(){
		return this.filter(function(value, 	index, self){
			return self.indexOf(value) === index;
		})
	}


	/**
	 * Using:
	 * >> [1, 1, 2, 3, 3].union([1, 4, 5])
	 * [1, 2, 3, 4, 5]
	 */
	Array.prototype.union = function(sequence){
		return this.concat(sequence).unique();

	}


	/**
	 * Using:
	 * >> [1, 1, 2, 3].intersection([2, 3, 4])
	 * [2, 3]
	 */
	Array.prototype.intersection = function(sequence){
		return this.filter(function(elem) {
			return sequence.indexOf(elem) != -1;
		});
	}

	/**
	 * Using:
	 * >> [1, 2, 3].diff([2, 3, 4])
	 * [1]
	 */
	Array.prototype.diff = function(sequence){
		return this.filter(function(elem) {
			return sequence.indexOf(elem) === -1;
		});
	}


	/**
	 * Using:
	 * >> [-1, 1, -2, 2].filterNot(function(x){ return x > 0; })
	 * [-1, -2]
	 */
	Array.prototype.filterNot = function(fn){
		var arr = [];

		this.map(function(elem){
			if(!fn(elem)){
				arr.push(elem);
			}
		});

		return arr;
	}


	/**
	 * Using:
	 * >> ["a", "a", "a", "b", "c", "b"].counter()
	 * Object {a: 3, b: 2, c: 1}
	 */
	Array.prototype.counter = function(){
		var obj = {};
		
		this.map(function(elem){
			obj[elem] = (obj[elem] + 1) || 1;
		});

		return obj;
	}


	/**
	 * Using:
	 * >> [2, 4, 5, 1, 3].max()
	 * 5
	 */
	Array.prototype.max = function(){
		return Math.max.apply(null, this);
	}


	/**
	 * Using:
	 * >> [2, 4, 5, 1, 3].min()
	 * 1
	 */
	Array.prototype.min = function(){
		return Math.min.apply(null, this);
	}


	/**
	 * Using:
	 * >> [[1,2],[3,4],[5,6]].flatten()
	 * [1, 2, 3, 4, 5, 6]
	 */
	Array.prototype.flatten = function(){
		return this.reduce(function(a, b){
			return a.concat(b);
		});
	}


	/**
	 * Using:
	 * >> seq.range(101).sum()
	 * 5050
	 */
	Array.prototype.sum = function(){
		return this.reduce(function(a, b){
			return a + b;
		});
	}
	

	/**
	 * Using:
	 * >> [1, 2, 3, 4].product()
	 * 24
	 */
	Array.prototype.product = function(){
		return this.reduce(function(a, b){
			return a * b;
		});
	}


	/**
	 * Using:
	 * >> [1, 2].average()
	 * 1.5
	 */
	Array.prototype.average = function(){
		return (this.sum() / this.length);
	}


	/**
	 * Using:
	 * >> [1, 2, 3, 4, 5].median()
	 * 3
	 */
	Array.prototype.median = function(){
		this.sort(function(a, b){
			return a - b;
		});

		if(this.length % 2 == 0)
			return  Math.floor((this[((this.length / 2) - 1)] + this[(this.length / 2)]) / 2)
		else 
			return Math.floor(this[(this.length - 1) / 2]);
	}


	/**
	 * Using:
	 * >> [1, 2, 3].zip(["a", "b", "c", "d"])
	 * [["a", 1], ["b", 2], ["c", 3]]
	 */
	Array.prototype.zip = function(sequence){
		var arrs = [];
			arrs.push(sequence);
			arrs.push(this);

		var shorted = arrs.length == 0 ? [] : arrs.reduce(function(a, b){
			return a.length < b.length ? a : b;
		});

		return shorted.map(function(elem, index){
			return arrs.map(function(arr){
				return arr[index];
			})
		});
	}


	/**
	 * Using:
	 * >> [].isEmpty()
	 * true
	 */
	Array.prototype.isEmpty = function(){
		if(!this.length)
			return true;
		else
			return false;
	}


	/**
	 * Using:
	 * >> ['one', 'two', 'three'].groupBy('length')
	 * Object {3: ['one', 'two'], 5: ['three']}
	 *
	 * >> [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}].groupBy('age')
	 * Object {'40': [{'name':'moe', 'age':40}],'50': [{'name':'larry', 'age':50}],'60': [{'name':'curly', 'age':60}]}
	 */
	Array.prototype.groupBy = function(property){
		var groups = {};

		this.map(function(elem){
			var group = JSON.stringify(elem[property]);
			if(group in groups){
				groups[group].push(elem);
			}
			else{
				groups[group] = [elem];
			}
		}.bind(this));

		return groups;
	}


	/**
	 * Using:
	 * >> [1, 2, 3].choice()
	 * 1
	 * >> [1, 2, 3].choice()
	 * 2
	 * >> [1, 2, 3].choice()
	 * 2
	 */
	Array.prototype.choice = function(){
		var index = Math.floor(Math.random() * this.length)		;
		return this[index];
	}


	/**
	 * Using:
	 * >> "(2 + 4) * 2".lambda()
	 * 12
	 * >> "(_ + 4) * 2".lambda()(2)
	 * 12
	 * >> "x -> (x + 4) * 2".lambda()(2)
	 * 12
	 * >> "x -> x + 4 * 2".lambda()(2)
	 * 10
	 * >> "x -> y -> (y + x) * 2".lambda()(2)(4)
	 * 12
	 * >> "/2".lambda()(10)
	 * 5
	 * >> "point.x".lambda()({x:4, y:2});
	 * 4
	 * >> "({x:10, y:2})[key]".lambda()("x");
	 * 10
	 */
	String.prototype.lambda = function(){
		var params = [],
			expr = this,
			sections = expr.split(/\s*->\s*/m);
		
		if(sections.length > 1){
			while(sections.length){
				expr = sections.pop();
				params = sections.pop().split(/\s*,\s*|\s+/m);
				
				sections.length && sections.push('(function('+params+'){return ('+expr+')})');
			}
		}
		if(expr.match(/\b_\b/)){
			params = '_';
		}
		else{
			var leftSection = expr.match(/^\s*(?:[+*\/%&|\^\.=<>]|!=)/m),
				rightSection = expr.match(/[+\-*\/%&|\^\.=<>!]\s*$/m);
			
			if(leftSection || rightSection){
				if(leftSection){
					params.push('$1');
					expr = '$1' + expr;
				}
				if(rightSection){
					params.push('$2');
					expr = expr + '$2';
				}
			}
			else{
				var vars = this.replace(/(?:\b[A-Z]|\.[a-zA-Z_$])[a-zA-Z_$\d]*|[a-zA-Z_$][a-zA-Z_$\d]*\s*:|this|arguments|'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g, '').match(/([a-z_$][a-z_$\d]*)/gi) || [];
			
				for (var i = 0, v; v = vars[i++]; )
					params.indexOf(v) >= 0 || params.push(v);
			}
		}

		if(params.length > 0)
			return new Function(params, 'return (' + expr + ')');
		else
			return new Function('return (' + expr + ')')();
	}

	if (typeof exports != 'undefined' && !exports.nodeType) {
		if (typeof module != 'undefined' && !module.nodeType && module.exports) {
			exports = module.exports = String;
			exports = module.exports = Array;
			exports = module.exports = seq;
		}
	}
	else {
		window.seq = seq;
	}

})();