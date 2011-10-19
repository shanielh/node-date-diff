// English format.
exports.english = function() {
	
	var numberToString = { 1 : "one" };
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
		if (number == 1) {
			number = numberToString[number];
		}

		// Return value
		return signToString[sign] + " " + number + " " + unit;
	}

}();