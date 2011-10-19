var diff = require('../lib/main');
var assert = require('assert');

var formatFunction = diff.formats.hebrew;

exports.millisecond = function() {
	assert.eql(formatFunction(1,1,'millisecond'), 'בעוד מילישניה');
}

exports.twoMilliseconds = function() {	
	assert.eql(formatFunction(1,2,'millisecond'), 'בעוד שתי מילישניות');
}

exports.threeMilliseconds = function() {
	assert.eql(formatFunction(1,3,'millisecond'), 'בעוד 3 מילישניות');
}