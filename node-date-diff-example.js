// Generating format and calculation function
var date_diff = require('lib/main');

var format_diff = date_diff.gen(date_diff.english);

// Writing the diff to console.
console.log(format_diff(new Date(),new Date(2011, 9, 18)));
