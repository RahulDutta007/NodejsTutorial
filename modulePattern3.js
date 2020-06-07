var counter = function(arr) {
	return 'There are ' + arr.length + ' elements';
};

var adder = function(a,b) {
	return `The sum of 2 num is ${a+b}`; //ECMAS6 syntax
}

//console.log(counter(['hi', 'bye', 'hello']));

var pi = 3.143

module.exports = {
	counter: counter,
	adder: adder,
	pi: pi
}