(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function add(a,b) {    ////////Define function//////
	return a + b;
}

// function addMore(a,b,c) {
// 	return a+b+c
// }

module.exports = add;   /////////export the add function
// module.exports = {add, addMore};  makes an object that is exported, shorthand notation
},{}],2:[function(require,module,exports){
"use strict";

let MathModule = require("./math");    /////calling from math.js object 

console.log("adding:", MathModule.adding(3,5));  ////////use dot notation bc Mathmodule is an object
console.log("subtract:", MathModule.subtracting(3,5));
console.log("multiply:", MathModule.multiplying(3,5));
},{"./math":3}],3:[function(require,module,exports){
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
},{"./add":1,"./multiply":4,"./subtract":5}],4:[function(require,module,exports){
"use strict";

function multiply (a,b) {    ////////Define function//////
	return a * b;
}

module.exports = multiply ;
},{}],5:[function(require,module,exports){
"use strict";

function subtract(a,b) {    ////////Define function//////
	return a - b;
}

module.exports = subtract;
},{}]},{},[2])


//# sourceMappingURL=bundle.js.map
