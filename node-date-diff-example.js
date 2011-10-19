var formatFunction = function() {
	
	var numberToString = { 1 : "one", 2 : "two" };
	var signToString = 	 { 1 : "After"};
	signToString[-1] = "Before";

	var pluralize = function(unit) {
		return unit + "s";
	}

	return function(sign, number, unit) {
		
		if (number > 1) {
			unit = pluralize(unit);
		}
	
		if (number < 3) {
			number = numberToString[number];
		}

	
		console.log(signToString[sign] + " " + number + " " + unit);
	}

}();

var dateDiff = require('./dates')(formatFunction);

dateDiff(new Date(),new Date(2011, 9, 19));
