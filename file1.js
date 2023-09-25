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

// booleans & comparison operator

// booleans shows only true and false

let num1 = 20;
let num2 = 20;
console.log(num1<num2);

// == shwow data type's value and === shows value with date types
// != check "is it diffence or not" and !== check value data type difference

// truthy and falsy values
// (false, "", null, undefined, 0)

// if else condition ******************************************************

let age2 = 18;
if(age2>18) {
    console.log("You can see the TV");
} else {
    console.log("You can't the tv");
};

let num4 = 14;
if(num4%2===0) {
    console.log("Even");
}else {
    console.log("Odd");
};

// truthy and falsy values
// (false, "", null, undefined, 0)

let falsyValue = false;   // (false, "", null, undefined, 0)
if(falsyValue){
    console.log(falsyValue);
}else{
    console.log("This is falsy value");
};

// ternary operator/ conditional operator

let age5 = 4;
let drink = age5 >= 5 ? "Coffee" : "Milk";
console.log(drink);

// && (and) || (or) operator
// For && operator need to both condition has to true.
// For || operator need to one condition has to true.

// && (and) operator
// For && operator need to both condition has to true.
let myName1 = "Shamim";
let age6 = 30;

if(myName1[0] === "S" && age6>18){ 
    console.log("Show me the user name and age");
}else{
    console.log("This is else value");
}

// || (or) operator
// For || operator need to one condition has to true.
let myName2 = "Al-Shamim";
let age7 = 19;

if(myName2[0] === "S" || age7>18){ 
    console.log(" Show me the IF value");
}else{
    console.log("This is else value");
};

//  Nested if else

// let winningNumber = 20;
// let userGuess = +prompt("Guess the number");

// if(userGuess === winningNumber){
//     console.log("Yahoo!! you are right.")
// }else{
//     if(userGuess < winningNumber){
//         console.log("It's too Low");
//     }else{
//         console.log("It's too High");
//     }

// };

// if, else if, else if, else ****

let weather = 31;

if(weather > 40){
    console.log("It's Too Hot Outside");
}else if(weather > 30){
    console.log("Let's go for swim");
}else if(weather > 20){
    console.log("Let's go for walk");
}else if(weather > 10){
    console.log("It's Cold")
}else{
    console.log("It's nothing")
};
// **************************************

// switch statement

let day = 3;
switch(day){
    case 0:
         console.log("Sunday");
         break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Twesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;            
    case 6:
        console.log("Saturday");
        break;

    default:
        console("Invalide")

};

// *******************************

// While Loop
let i = 0;
while(i<=4){
    console.log(i);
    i++
};
console.log(`current value of ${i}`);

// while Loop anothe example
let num5 = 10;
let total = 0;
let ii = 0;
while(ii<=10){
    total = total + ii;
    ii++
};
console.log(total);

// for loop

for(let j = 0; j<=11; j++){
    console.log(j);
};

let total2 = 0;
let num7 = 100;
for(let k = 0;k<=100;k++){
    total2 = total2 + k;
};
console.log(total2);

// break keyword
for(let d = 1;d<=10;d++){
    if(d===6){
        break;
    }
    console.log(d)
};
console.log("here is break");

// continue keyword
for(let e = 1;e<=10;e++){
    if(e===6){
        continue;
    }
    console.log(e)
};
console.log("Here is continue after 6");

// do while loop
let s = 8;
do{
    console.log(s);
    s++
}while(s<=10);
console.log("This is Do while loop");

// ***************************************

// Arrays(this is called reference type) /Ordered collection of items
let fruits = ["Apple", "Mango", "Grapes"];
console.log(fruits);
console.log(fruits[0]);

// for change any data in the array
fruits[1] = "Banana";
console.log(fruits);
console.log(typeof fruits);

// all kind of reference type is a object
// that's Array is a opject

// array push (this is add new item in the last at the array)
 fruits.push("Orange", "Grapes");
 console.log(fruits);

//  array pop (for remove the last item)

fruits.pop();
console.log(fruits);

// array unshift (for add the item in at the first)

fruits.unshift("Cherry");
console.log(fruits);

// array shift (for remove the first item)
fruits.shift();
console.log(fruits);