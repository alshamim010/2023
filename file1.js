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

// Arrow Function
const singHappyBirthday2 = () =>{
    console.log("Happy Birthday to you..");
};
singHappyBirthday2();
console.log("Above code is Arrow Function");

// ****
const sumTwoNumber2 = (number3, number4) =>{   
    return number3 + number4;
};
const totalSum2 = sumTwoNumber2(17,13);   // here passing the arguments
console.log(totalSum2);

// ****

const isEven2 = (evenNumber2) => {
    if(evenNumber2 % 2 === 0){
        return true;
    }
    return false;
}

console.log(isEven2(5));
console.log(isEven2(10));

// ****  When exsit single pramitter then we can do without bracket
const isEven3 = evenNumber3 => {
    if(evenNumber3 % 2 === 0){
        return true;
    }
    return false;
}

// another way for single pramitter
// const isEven4 = evenNumber4 => evenNumber4 % 2 === 0;

console.log(isEven3(5));
console.log(isEven3(10));

// hoisting

// Only happaned for function decleareation

hello()
function hello(){
    console.log("Hello World");
};

// ******
// functions inside function

// function app(){}
const app = () => {

    const myFunc = () => {
        console.log("Hello from myFunc");
    };

    const addTwo = (akNum, duiNum) => {
        return akNum + duiNum;
    };

    const mul = (akNum1, duiNum1) => akNum1 * duiNum1; 

    console.log("Inside App");
    myFunc()
    console.log(addTwo(55, 5));
    console.log(mul(5,5));

}
app();

// lexical scope
// block scope vs function scope
// let and const are block scope
// var is function scope

// default parameters

function addTwo2(a,b=1){
    return a + b;
}
const ans3 = addTwo2(5,15); // If we are not given the second argument value then it takes default (b=1) value;
console.log(ans3);

// ****
// rest parameters

function myFunc2(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}
myFunc2(5,6,7,8,9,10,11,12);

// rest parameters function

function addAllSum(...numbers){
    let total3 = 0;
    for(let number6 of numbers){
        total3 = total3 + number6;
    }
    return total3;
}
const ans4 = addAllSum(1,2,3,4,5,6,7,8,9,10);
console.log(ans4);

// ****
// parameters destructuring

// use in the object
// react 

const person2 = {
    firstName5: "Isran Khan",
    gender5: "Male",
};

function printDetails({firstName5, gender5}){
    console.log(firstName5);
    console.log(gender5);
};
printDetails(person2);

// ****
// callback functions

function myFunction1(name){
    console.log("This is Call back function");
    console.log(`Hello my name is ${name}`);
};

function myFunction2(callback){
    console.log("This Original function");
    callback("Mr. Nayan");
}

myFunction2(myFunction1);

// ****
// function returning function

function myFuncReturn(){
    function funcReturn(){
        return "Hello Return function";
    }
    return funcReturn;
}

const ans5 = myFuncReturn()
console.log(ans5());

// important array methods

const numbers1 = [2,3,4,5,6];

function multiplyBy2(number, index){
    console.log("index is ", index);
    console.log(`${number}*2 = ${number*2}`);
};

for(let w = 0; w< numbers1.length; w++){
    multiplyBy2(numbers1[w],w);
}

// ****
const numbers2 = [2,3,4,5,6];

function multiplyBy3(number9, index){
    console.log(`Index is ${index} Number is ${number9}`);
    //console.log(`${number9}*2 = ${number9*2}`);
};

// for(let t = 0; t< numbers2.length; t++){
//     multiplyBy3(numbers2[t],t);
// }

// we can use against above for loop cond
numbers2.forEach(multiplyBy3);   // forEach doing index pass but we can do it optional

//another way
const great = [11,12,13,14];

great.forEach(function(number, index){
    console.log(`Index is ${index} Number is ${number}`);
});


// ****
// Real use of forEach
const visitor = [
    {firstName: "Isran", age: 27},
    {firstName: "Badhon", age: 25},
    {firstName: "Lablu", age: 24},
    {firstName: "Shamim", age: 28},
];

// visitor.forEach(function(visit){
//     console.log(visit.firstName);
// });

// another way
for(let visit of visitor){
    console.log(visit.age);
}

// another way with arraw function
visitor.forEach (visit=>{
    console.log(visit.firstName);
});

// map method   which is very very important
//map give us a new array that's why we need to write return
const forSquare = [3,4,5];

const square = function(numb){
    return numb * numb;  // in the map method it must be return
};

const squareNumber = forSquare.map(square);
console.log(squareNumber);

// others way

const forSquare2 = [6,7,8];

const squareNumber2 = forSquare2.map(function(square2){
    return square2 * square2;
});
console.log(squareNumber2);

const forSquare3 = [9,10,11];

// array function
const squareNumber3 = forSquare3.map((square3)=>{
    return square3 * square3;
});
console.log(squareNumber3);

// Real use of map
const visitor2 = [
    {firstName: "Isran", age: 27},
    {firstName: "Badhon", age: 25},
    {firstName: "Lablu", age: 24},
    {firstName: "Shamim", age: 28},
];

visitor2.forEach((visit2)=>{
    console.log(visit2.firstName);
});

// filter method

const numbersFilter = [1,2,3,4,5,6,7,8,9,10];

const isOdd = function(oddNumber){
    return oddNumber%2!==0;
};

const oddNumb = numbersFilter.filter(isOdd);
console.log(oddNumb);

// arrow function
const oddNumb2 = numbersFilter.filter((isEven)=>{
    return isEven%2 ===0;
});
console.log(oddNumb2);

// ****
// reduse method

const redu = [1,2,3,4,5,6,7,8,9,10];

const totalSums = redu.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
});
console.log(totalSums);

// real use of reduce method

const userCart = [
    {productId: 1, productName: "Mobile", price: 13000},
    {productId: 2, productName: "TV", price: 17000},
    {productId: 3, productName: "Laptop", price: 20000},
];

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);

// ****
// sort method

const sortingNumber =[3,2,45,12,43,4,8,];

sortingNumber.sort((a,b)=>{
    return a-b;
});

console.log(sortingNumber);

// real use of sort method

const products = [
    {productId: 1, productName: "p1", price: 400},
    {productId: 2, productName: "p2", price: 200},
    {productId: 3, productName: "p3", price: 8000},
    {productId: 4, productName: "p4", price: 3000},
    {productId: 5, productName: "p5", price: 700},
];

// lowToHigh
const lowToHigh = products.sort((a,b)=>{
    return a.price-b.price;
});

console.log(lowToHigh);

// ****
// find method
const animals = ["hello","cat","dog","lion"];
const  animalsResult = animals.find((string)=>{
    return string.length===3;
})
console.log(animalsResult);

// ****
// real use of find method
const userFind = [
    {userId: 1, userName: "Badhon"},
    {userId: 2, userName: "Isran"},
    {userId: 3, userName: "Lablu"},
    {userId: 4, userName: "Shamim"},
    {userId: 5, userName: "Ebadul"},
];

const myUser= userFind.find((user)=>{
    return user.userId===3;
});
// const myUser = userFind.find((user)=>user.userId===3);
console.log(myUser);

// ****
// every method

const everyNumber = [2,4,6,8,10];
function isEven5(everyNumber){
    return everyNumber % 2 === 0;
}
const everyAns = everyNumber.every(isEven5);
// const everyAns = everyNumber.every((everyNumber)=>everyNumber%2===0);
console.log(everyAns);

// real use of every method

const userCart2 = [
    {productId: 1, productName: "Mobile", price: 13000},
    {productId: 2, productName: "TV", price: 17000},
    {productId: 3, productName: "Laptop", price: 20000},
];

const less30k = userCart2.every((isUserCartPriceLess)=>isUserCartPriceLess.price < 30000);
console.log(less30k);

// some method
// if anynumber is even then it shows the true from the array data
const userCart3 = [
    {productId: 1, productName: "Mobile", price: 13000},
    {productId: 2, productName: "TV", price: 17000},
    {productId: 3, productName: "Laptop", price: 20000},
    {productId: 4, productName: "macbook", price: 200000},
];

const big100k = userCart3.some((isUserCartPriceBig)=>isUserCartPriceBig.price > 100000);
console.log(big100k);

// ****
// fill method
// value , start, end

const myFillArray = new Array(10).fill(1);
console.log(myFillArray);

const myFillArray2 = [1,2,3,4,5,6,7,8];
myFillArray2.fill(-1,2,5);
console.log(myFillArray2);

// ****
// splice method
// start, delete, insert

// delete
const mySpliceArray = ["item1", "item2", "item3"];
mySpliceArray.splice(1,1);
console.log(mySpliceArray);

// insert
const mySpliceArray2 = ["item1", "item2", "item3"];
mySpliceArray2.splice(1,0, "Inserted Item");
console.log(mySpliceArray2);

// delete & insert
const mySpliceArray3 = ["item1", "item2", "item3"];
mySpliceArray3.splice(1,2, "Inserted Item1", "Inserted Item2");
console.log(mySpliceArray3);

// *****************************
// iterables
// where we can add (for of loops). That is called iterables
// like "string", "array" are iterable

const firstIterable = "Shamim";

for(let char of firstIterable){
    console.log(char);
};

const arrayIterable = ["item1", "item2", "item3"];
for(let itemIterable of arrayIterable){
    console.log(itemIterable);
};

// array like object
// which have length property
// and we can access them by the index;
// example : string

const arrayLikeObj = "shamim";
console.log(arrayLikeObj.length);
console.log(arrayLikeObj[2]);

// Sets (it is iterable)
// store date
// sets also have it's own methods
// no index-basex access
// Order is not guaranted
// unique items only (no duplicates allowed);

// Set create or declearation
const numberSet = new Set(["1,2,3"]);
console.log(numberSet);

const arrayIterable2 = ["item1", "item2", "item3"];
const numberSetBlank = new Set();
numberSetBlank.add(2);
numberSetBlank.add(3);
numberSetBlank.add(arrayIterable2); // we can add or assaign another array
numberSetBlank.add(["item4", "item5"]);  // if we add same "array item" by the square brackets then it take both for the deference address
numberSetBlank.add(["item4", "item5"]);  // if we add same "array item" by the square brackets then it take both for the deference address
//We can check do we have any perticular exsting number or anythings 
if(numberSetBlank.has(2)){
    console.log("We have")
}else{
    console.log("We haven't")
}
console.log(numberSetBlank);

// real use of Set
const idsFinding = [1,2,3,4,2,1,3,4,5,6,];
const uniqueIdsSet = new Set(idsFinding); // we can pass array here. Because it is iterable 
console.log(uniqueIdsSet)   // here we can't use length property

// if we finding how much length it is. then we need to use bellow mehtod
let length = 0;
for(let element of uniqueIdsSet){
    length++;
};
console.log(length);

// ************
// Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps an objects
// objects can only have string or symbol
// as key
// in maps we can use anything as key
// like array, number, string

// It also called Object literal
// key--> will be "String" 99.99
// key--> will be "Symble"

const person3 = {
    firstName: "shamim",
    age: 30,
    1: "one",
};
// console.log(person3["firstName"])
console.log(person3.firstName);
for(let key in person3){
    console.log(typeof key);
};

// Map== doing key value pair store
const person4 = new Map();
person4.set("firstName", "Isran");
person4.set("age", 25);
person4.set(1, "One");
// person4.set([1,2,3], "Onetwothree");
// person4.set({1: "one"}, "Onetwothree");
console.log(person4);
console.log(person4.get("firstName"));  // for access data need to use get() for the Map()
// console.log(person4.keys());
for(let key of person4.keys()){
    console.log(key, typeof key);
}

// here we can use fo of loop which give us key value pair
for(let key of person4){
    console.log(key);
    console.log(typeof key);
    console.log(Array.isArray(key));
}

// for destructure we can coding like this
for(let [key, value] of person4){
    console.log(key, value);
};

const person5 = new Map([["firstName", "Badhon"], ["age", 25]]);
console.log(person5);

// ****
const person6 = {
    id: 1,
    firstName: "lablu",
}
const extraInfo = new Map();
extraInfo.set(person6, {age: 23, gender: "male"});
console.log(person6.firstName);
console.log(extraInfo.get(person6).age);

// clone using Object.assign

const obj7 = {
    key1: "value1",
    key2: "value2",
}

// const obj8 = obj7; //*
// const obj8 = {...obj7}  // but when we use spread opertor then it show in only one objects
// another way which is Object.assign
const obj8 = Object.assign({}, obj7);

obj7.key3 = "value3" // * if we add this then it shows both in the two object
console.log(obj7);
console.log(obj8);

// Optional chaining

const user4 = {
    firstName: "shamim",
    // address: {houseNumber: "2345"},
};
console.log(user4?.firstName);
console.log(user4?.address?.houseNumber);

// ************************************************
// methods
// function inside object
const personMethod = {
    firstName: "Al-Shamim",
    age: 30,
    about: function(){
        console.log(`Person name is ${this.firstName} and age is ${this.age}`);  // here (this) is fully (personMethod) object
    },
};
personMethod.about();

//*****

function personInfo(){
    console.log(`Person name is ${this.firstName} and age is ${this.age}`);  // here (this) is fully (personMethod) object
};

const personMethod1 = {
    firstName: "Isran",
    age: 29,
    about: personInfo,
};
const personMethod2 = {
    firstName: "Badhon",
    age: 26,
    about: personInfo,
};
const personMethod3 = {
    firstName: "Lablu",
    age: 27,
    about: personInfo,
};
personMethod1.about();
personMethod2.about();
personMethod3.about();