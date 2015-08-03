
var lodash = require('lodash');

/**
 * @makePartial
 * 
 */
var makePartial = function(func, args){
	lodash.partialRight.apply(lodash, [func].concat(args));
};

var DoStep = function(name){
	this.name = name;
	this.context = this;
	this.args = [];
};

/**
 * @setContext
 *
 * Sets a context variable 
 * local to the instance
 * of the DoStep Class
 *
 * @context
 */
DoStep.setContext = function(context){
	this.context = context;
};

/**
 * @setArgs
 *
 * Takes an array of arguments
 * and adds them to the current argument list.
 *
 * @args
 */
DoStep.setArgs = function(){
	var args = Array.prototype.slice.call(arguments);
	this.args = this.args.concat(args);
};

/**
 * @run
 *
 * Creates a new function with the
 * arguments applied to the function to run. 
 *
 * Runs step with the set name, and partially applied
 * function in the default or set context.
 *
 * @func
 */
DoStep.prototype.run = function(func){
	if (!this.args.length) { return step(this.name, func.bind(this.context)); }

	var partial = makePartial(func, this.args).bind(this.context);
	step(this.name, partial);
};


var doStep = function(options){
	return new DoStep(options);
};

module.exports = doStep;