var times = { second : 1, minute : 60, hour : 60, day : 24, week : 7, month : 4, year : 12 }

var n = 1;
for (var key in times) {
	n *= times[key];
	times[key] = n;
}

module.exports = function(formatFunction) {
	
	return function(firstDate, secondDate) {
		
		var diffTimestamp = (firstDate.getTime() - secondDate.getTime()) / 1000;
		var sign;
		
		if (diffTimestamp < 0) {
			diffTimestamp = -diffTimestamp;
			sign = -1;
		} else {
			sign = 1;
		}
		
		var lastKey;
		for (var key in times) {
			if (diffTimestamp < times[key]) {			
				break;
			}
			lastKey = key;
		}
		
		var diffInKey = Math.floor(diffTimestamp / times[lastKey]);
		return formatFunction(sign, diffInKey, lastKey);
			
	};
};
