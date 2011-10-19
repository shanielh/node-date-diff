var formatFunction = function() {
	
	var numberToString = { 1 : "one", 2 : "two" };
	var signToString = 	 { 1 : "In"};
	signToString[-1] = "Before";

	var pluralize = function(unit) {
		return unit + "s";
	}

	// The format function.
	return function(sign, number, unit) {
		
		// Pluralize the units if needed
		if (number > 1) {
			unit = pluralize(unit);
		}
		
		// This is nice, we can use natural language for some numbers...
		if (number < 3) {
			number = numberToString[number];
		}

		// Return value
		return signToString[sign] + " " + number + " " + unit;
	}

}();

// Generating format and calculation function
var dateDiff = require('./node-date-diff')(formatFunction);

// Writing the diff to console.
console.log(dateDiff(new Date(),new Date(2011, 9, 19)));
