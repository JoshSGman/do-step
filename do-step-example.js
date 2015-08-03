
var doStep = require('./do-step');

var addNums = function(done){
	var nums = Array.prototype.slice.call(arguments, 1);
	nums.reduce(function(t, v){ return t += v; });	
	done();
};

// doStep Example
doStep('Add Numbers')
	// Set the context (optional)
	.setContext(this)
	// Set additional arguments (optional)
	.setArgs(1,2,3)	
	// Run the callback it will always be passed the done function
	// in addition to any other arguments passed in the .setArgs functions
	.run(addNums);
