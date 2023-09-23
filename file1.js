"use strict";
// This is comments for initial stage
console.log("Hello World");
// declare a variable
var firstName = "Md. Al-Shamim";
// Use a variable
console.log(firstName);

// Change Value
firstName = "Md. Thamedul Islam";
console.log(firstName);

// Convention
// Need to Start code with small letter and use camelCase
// declare variable with let keyword
let secondName = "This is let";
console.log(secondName);

// declare constants-which is not changeabe
const pi = 3.14;
console.log(pi);

// **************************************
// string indexing
let thirdName = "Badhon";
console.log(thirdName[2]);
console.log(thirdName.length);
console.log(thirdName[thirdName.length-1]);

// trim()
let fourthName = "    Shawghath   ";
console.log(fourthName.length);
fourthName = fourthName.trim();
console.log(fourthName);
console.log(fourthName.length);

// toUpperCase()
let fiveName = "Shamim";
fiveName = fiveName.toUpperCase();
console.log(fiveName);

// toLowerCase()
let sixName = "Shamim";
sixName = sixName.toLowerCase();
console.log(sixName);

// slice() start index, end index
let sevenName = "Shamim";
let eightName = sevenName.slice(0,3);
console.log(eightName);
// *************************************



