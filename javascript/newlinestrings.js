var v1 = "\nAdvantages:\n - Widely supported.\n - Intended.\n\nDisadvantages:\n - Hard to read.\n"

var v2 = `
Advantages:
 - Easy to read.
 - Intended.

Disadvantages:
 - Not supported in ES5 or lower.
`

var v3 = (function() {/*
Advantages:
 - Easy to read.

Disadvantages:
 - Not intended.
 - Does not behave as expected in some browsers.
*/}).toString().replace(/(^function\(\) {\/\*)|(\*\/}$)/g, "");

var v4 = " \
Advantages: \
 - Easy to read. \
 \
Disadvantages: \
 - Does not behave as expected in some browsers. \
";

var v5 = [
	"",
	"Advantages:",
	" - Easy to read.",
	" - Intended.",
	"",
	"Disadvantages:",
	" - Slower",
	""
].join("\n");