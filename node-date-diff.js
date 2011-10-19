// Setting the times
var times = { second : 1, minute : 60, hour : 60, day : 24, week : 7, month : 4, year : 12 }

// Modifying the object for easier work
var n = 1;
for (var key in times) {
	n *= times[key];
	times[key] = n;
}

// The output of the module is a function that receives a function to format the output with
// And returns a function that calculates the diff and formats it using the given function
module.exports = function(formatFunction) {
	
	return function(firstDate, secondDate) {
		
		// Calculating diff timestamp
		var diffTimestamp = (firstDate.getTime() - secondDate.getTime()) / 1000;
		var sign;
		
		// Setting sign
		if (diffTimestamp < 0) {
			diffTimestamp = -diffTimestamp;
			sign = -1;
		} else {
			sign = 1;
		}
		
		// Checking for the biggest factor of the timestamp
		var lastKey;
		for (var key in times) {
			if (diffTimestamp < times[key]) {			
				break;
			}
			lastKey = key;
		}
		
		// Calculating and formating.
		var diffInKey = Math.floor(diffTimestamp / times[lastKey]);
		return formatFunction(sign, diffInKey, lastKey);
			
	};
};
