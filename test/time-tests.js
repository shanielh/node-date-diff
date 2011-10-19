var diff = require('../node-date-diff');
var assert = require('assert');

// This returns a format function that asserts with the given arguments.
var assertFormat = function(expectedSign, expectedNumber, expectedUnit) {

	return function(actualSign, actualNumber, actualUnit) {

		assert.eql(expectedSign, actualSign);
		assert.eql(expectedNumber, actualNumber);
		assert.eql(expectedUnit, actualUnit);
		
	}
}

exports.millisecondDiff = function() {
	
	var firstDate = new Date(1);
	var secondDate = new Date(0);
	
	diff(assertFormat(1, 1, 'millisecond'))(firstDate, secondDate);
	
}

exports.beforeSecondDiff = function() {
	
	var firstDate = new Date(5);
	var secondDate = new Date(0);
	
	diff(assertFormat(1, 5, 'millisecond'))(firstDate, secondDate);
	
}

exports.secondDiff = function() {
	
	var firstDate = new Date(1*1000);
	var secondDate = new Date(0);
	
	diff(assertFormat(1, 1, 'second'))(firstDate, secondDate);
	
};

exports.beforeMinuteDiff = function() {
	
	var firstDate = new Date(5*1000);
	var secondDate = new Date(0);
	
	diff(assertFormat(1, 5, 'second'))(firstDate, secondDate);
	
};

exports.minuteDiff = function() {
	
	var firstDate = new Date(60*1000);
	var secondDate = new Date(0);
	
	diff(assertFormat(1, 1, 'minute'))(firstDate, secondDate);
	
};

// Need to complete