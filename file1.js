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
// type of operator

// data typers (primitive data types)
// string "shamim"
// number 234
// booleans
// undefined
// null
// BigInt
// symbol


let age = 30;
let nineName = "Al-Shamim";

console.log(typeof age);

// convert number to string.
console.log(typeof (age + ""));

// convert string to number
let myStr = +"44";   //just need to add + before the string
console.log(typeof myStr);

// Other way to change number and string
 let myNuma = 55;
 myNuma = String(myNuma);  // just need to add String and Number exsiting name berfor the variable name.
 console.log(typeof myNuma);

//  string concatenation
let string1 = "Al";
let string2 = "shamim";
let fullName = string1 + " " + string2;
console.log(fullName);

// template string
let tenName = "Al-Shamim";
let age1 = 30;
// need output as like this
// My name is Al-Shamim and my age is 30;
// let aboutMe = "My name is " + tenName + " and my age is " + age1;
let aboutMe2 = `My name is ${tenName} and my age is ${age1}`   //This is template string
console.log(aboutMe2);

// undefined
let elevenName;  //if i am not assign anything in the variable that means it's undefined
console.log(typeof elevenName);

// null
let twelveName = null;
console.log(twelveName);
// twelveName = "Al-Shamim";  we can assign value in this variable;
console.log(twelveName);
console.log(typeof twelveName);  // it shows object but it's one kind of bug

// BigInt
let bigNumber = BigInt(123);
let sameBigNumber = 1n;
console.log(bigNumber);
console.log(sameBigNumber);
console.log(bigNumber + sameBigNumber);
