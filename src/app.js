"use strict";

let MathModule = require("./math");    /////calling from math.js object 

console.log("adding:", MathModule.adding(3,5));  ////////use dot notation bc Mathmodule is an object
console.log("subtract:", MathModule.subtracting(3,5));
console.log("multiply:", MathModule.multiplying(3,5));