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
let s = 3;
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

// primitive data type example

let num8 = 5;
let num9 = num8;
console.log(num8);
console.log(num9);
num8++
console.log(num8);
console.log(num9);

// reference data type example
let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("item3")
console.log(array1);
console.log(array2);

// how to clone array
let array3 = ["apple", "orange"];
// let array4 = array3.slice(0);    //slice way
// let array4 = [].concat(array3)   //concat way
// let array4 = [...array3];           //spread operator
//  let array4 = array3.slice(0).concat(["cherry", "grapes"]);  // If i need to add extra in the array4 variable
//  let array4 = [].concat(array3, ["cherry", "grapes"]);       // If i need to add extra in the array4 variable
let array4 = [...array3, "item3", "item4"];                     // If i need to add extra in the array4 variable
 // if i have oneMoreArray = ["item5", "item6"]  //then it will be  let array4 = [...array3, ...oneMoreArray];                                                                      

array3.push("cherry")
console.log(array3===array4);
console.log(array3);
console.log(array4);

// for loop in array

let fruits2 = ["apple", "mango", "grapes"];
let fruits3 = [];  // if I puse value in the Array

// for output at a time
for(let r=0; r < fruits2.length; r++){
    // console.log(fruits2[r]);
    // for uppercase
    // console.log(fruits2[r].toUpperCase());
    console.log("if I puse value in the Array");
    fruits3.push(fruits2[r]);
};
console.log(fruits3);

// Use (const) variable name for array or reference type

const fruits5 = ["pineapple", "apple", "cherry"];
//fruits5 = [];  const safe you from wrong code.
fruits5.push("banana");
console.log(fruits5);

// while loop in array

const fruits6 = ["Pineapple", "Apple", "Cherry"];
const fruits7 = []; //For push
let y = 0;
while(y<fruits6.length){
    console.log("This while loop in the array");
    console.log(fruits6[y]);
    // For Push
    fruits7.push(fruits6[y]);
    y++;
};
console.log("I'm push data of fruits6 in the fruits7");
console.log(fruits7);

// for of loop in array
const fruits9 = ["Fruits1", "Fruits2", "Fruits3"];
for(let fruits8 of fruits9){
    console.log("This (for of) loop");
    console.log(fruits8);
};

// for in loop in array
const fruits10 = ["fruits8", "fruits9", "fruits10"];
for(let index in fruits10){
    console.log(fruits10[index]);
}

// array  destructuring
const myArray = ["Value1", "Value2", "Value3", "Value4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log(myVar1);
// console.log(myVar2);

// let [myVar1, myVar2] = myArray;
// let [myVar1, , myVar2] = myArray;
let [myVar1, myVar2, ...myRestArray] = myArray;
console.log(myVar1);
console.log(myVar2);
console.log("This is Rest array")
console.log(myRestArray);

// ***********************************

// Objects  (this is also reference type like array)
//arrays are good but not sufficient
// for real world data
// Objects store key value pairs
// Objects don't have index

// How to create Objects
const lablu = {name:"Lablu Mia",age:28};
console.log(lablu);
console.log(typeof lablu);

// How to access data from Objects
console.log(lablu.name);
console.log(lablu.age);

const badhon = {
    name: "Badhon",
    age: "28",
    hobbies: ["Reading", "Watching Movie"]
};

console.log(badhon);
// output by the dot notation
console.log(badhon.hobbies);
// output by the bracket notation
console.log(badhon["age"]);

// How to add key value pair to Objects
// add by the dot notation
badhon.gender = "Male";
console.log(badhon);

// add by the bracket notation
badhon["game"] = "Football",
console.log(badhon);

const phone = "Phone number";
const isran = {
    name: "Badhon",
    age: "28",
    hobbies: ["Reading", "Watching Movie"]
};

isran[phone] = "01313445566";
console.log(isran);

// How to iterate Object

const torab = {
    name : "Torab islam",
    age : 33,
    hobbies : "Teaching"
};

// there are two type looping for object
//for in loop
// object.keys
for(let key in torab){
    console.log(key);
    console.log(torab[key]);
};

for(let key in torab){
    console.log(`${key} : ${torab[key]}`);
};

console.log("Property and key access by the Object keys in the bellow");
console.log(Object.keys(torab));

for(let key of Object.keys(torab)){
    console.log(torab[key]);
};

// Computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value10 = "myvalue10";
const value11 = "myvalue11";

// we need to get like this

// const obj = {
//     objkey1 : "myvalue10",
//     objkey2 : "myvalue11",
// };

//Here is two way

const obj1 = {
    [key1] : value10,
    [key2] : value11,
};
console.log(obj1);

// another way

const obj2 = {};

obj2[key1] = value10;
obj2[key2] = value11;

console.log(obj2);

// Again revision of spread operator
const array6 = [1, 2, 3];
const array7 = [5, 7, 8];
const myNewArray = [...array6, ...array7, 9, 10];
console.log(myNewArray);

// spread operator in Objects

const obj5 = {
    key5: "value5",
    key6: "value6",
};
const obj6 = {
    key7: "value7",
    key8: "value8",
}
const myNewObj = {...obj5, ...obj6, key9: "value9", key10: "value10"};
console.log(myNewObj);

// Object destructuring
const band = {
    bandName: "let zepplin",
    famousSong: "stairway to heaen",
    year: 1968,
    anotherFamousSong: "kasmir",
};

const {bandName, famousSong, ...restProbs} = band;
console.log(bandName, famousSong);
console.log("Below output is restProbs")
console.log(restProbs);

// change the variable name
// const {bandName: bandName2, famousSong: famousSong2} = band;
// console.log(bandName2);

// Objects inside array
// very useful in real world applications

const users = [
    {userId: 1, firstName1: "Badhon,", gender1: "Male"},
    {userId: 2, firstName1: "Lablu,", gender1: "Male"},
    {userId: 3, firstName1: "Isran,", gender1: "Male"},
];

//(for of) loop
for(let user of users){
    // console.log(user);
    // console.log(user.firstName1);
    // console.log(user.userId);
};

// nested destructuring

// const [user1, user2, user3] = users;
// console.log(user2);

const[{firstName1}, , {gender1}] = users;
console.log(firstName1);
console.log(gender1);

// If we need to change variable name
// const[{firstName1: changedName}, , {gender1: chandgedGender}] = users;
// console.log(changedName);
// console.log(chandgedGender);

// ********************************************

// Function

// basic structure

function singHappyBirthday(){
    console.log("Happy Birthday to you..");
};
singHappyBirthday();

// ****
function twoPlusFour(){
    return 2+4
};
const returndValue = twoPlusFour();
console.log(returndValue);

// ****
// here number1 and number2 is called Prametter
function sumTwoNumber(number1, number2){   
    return number1 + number2;
};
const totalSum = sumTwoNumber(17,13);   // here passing the arguments
console.log(totalSum);

// ****

function isEven(evenNumber){
    if(evenNumber % 2 === 0){
        return true;
    }
    return false;
}

console.log(isEven(5));
console.log(isEven(10));

// *****
// More Short code

// function isEven2(evenNumber2){
//     return evenNumber2 % 2 === 0;
// }
// console.log(isEven2(5));
// console.log(isEven2(10));

// ****
// input = string
// output = first character

function firstChar(giveString){
    return giveString[0];
};
console.log(firstChar("Shamim"));

// *****
// input = array, target (number)
// uptput = index of target if target present in array

function findTarget(arra, target){
    for(let z = 0; z<arra.length; z++){
        if(arra[z]===target){
            return z;
        }
    }
    return -1;
};

const myArra = [3,9,56,7,66,2];
const ans = findTarget(myArra, 2);
console.log(ans);
const ans2 = findTarget(myArra, 50);
console.log(ans2);

// Function expression example

const anotheSum = function(number1, number2){   
    return number1 + number2;
};

const anotheAns = anotheSum(88,12);
console.log(anotheAns);