// Generating format and calculation function
var date_diff_formats = require('./node-date-diff-formats');
var date_diff = require('./node-date-diff');

var format_diff = date_diff(date_diff_formats.english);

// Writing the diff to console.
console.log(format_diff(new Date(),new Date(2011, 9, 18)));

// Short way :

var short_format_diff = require('./node-date-diff')(require('./node-date-diff-formats').english);
console.log(short_format_diff(new Date(),new Date(2011, 9, 18)));
