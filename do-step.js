
var DoStep = function(options){
	this.stepName = options.step;
	this.match = options.match;
	this.setup = options.setup;
	this.context = options.context;
	this.args = options.args;
};


var doStep = function(options){
	return new DoStep(options);
};

module.exports = doStep;