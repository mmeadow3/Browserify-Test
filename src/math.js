"use strict";

let adding = require("./add");  //////this is calling the exported function of "add" from "add.js"
let subtracting = require("./subtract");
let multiplying = require("./multiply");



let Calculator = {
	adding,
	subtracting,
	multiplying
};

module.exports = Calculator; ///////exporting an object