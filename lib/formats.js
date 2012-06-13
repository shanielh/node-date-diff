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

// Polish format / Składnia polska
exports.polish = function() {

      var unitToString = {
            millisecond : ["milisekunda", "milisekundy", "milisekund"],
            second : ["sekunda", "sekundy", "sekund"],
            minute : ["minuta", "minuty", "minut"],
            hour : ["godzina", "godziny", "godzin"],
            day : ["dzień", "dni", "dni"],
            week : ["tydzień", "tygodnie", "tygodni"],
            month : ["miesiąc", "miesiące", "miesięcy"],
            year : ["rok", "lata", "lat"]
          };

      return function(sign, number, unit) {
        
        var format = 2;

        if(number == 1) {
          format = 0;
        }
        
        if(number % 10 == 2 && number % 100 != 12 ) {
          format = 1;
        }

        if (sign == -1) {
          return number + " " + unitToString[unit][format] + " temu";
        }
        
        return "Za " + number + " " + unitToString[unit][format];

      };

}();

exports.hebrew = function() {
	
	var unitToString = {
		millisecond : ["מילישניה", "מילישניות"],
		second : ["שניה", "שניות"],
		minute : ["דקה", "דקות"],
		hour : ["שעה", "שעות"],
		day : ["יום", "ימים"],
		week : ["שבוע", "שבועות"],
		month : ["חודש", "חודשים"],
		year : ["שנה", "שנים"]
	}
	
	var two = "שתי";
	
	var twoUnitsToString = {
		minute : "דקותיים",
		hour : "שעתיים",
		day : "יומיים",
		week : "שבועיים",
		month : "חודשיים",
		year : "שנתיים"
	};
	
	var signToString = 	 { 1 : "בעוד"};
		signToString[-1] = "לפני";
	
	
	return function(sign, number, unit) {
		
		if (number == 2 && typeof twoUnitsToString[unit] != 'undefined') {
			return signToString[sign] + " " + twoUnitsToString[unit]; 
		}
		
		if (number == 1) {
			return signToString[sign] + " " + unitToString[unit][0];
		}
		else {
			
			if (number == 2) {
				number = two;
			}
			
			return signToString[sign] + " " + number + " " + unitToString[unit][1];
		}
		
	}
	
}();