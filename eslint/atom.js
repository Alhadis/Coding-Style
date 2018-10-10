// Variant of default config optimised for Atom projects
"use strict";

module.exports = {...require("./.eslintrc.json")};

if(!module.exports.env)     module.exports.env = {};
if(!module.exports.globals) module.exports.globals = {};

module.exports.env.atomtest = true;
Object.assign(module.exports.globals, {
	atom:            true,
	attachToDOM:     true,
	Chai:            true,
	expect:          true,
	when:            true,
	unlessOnWindows: true,
});
