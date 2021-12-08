//NOTE: JS IS DYNAMIC LANGUAGE IT MEANS WE CAN ADD IN OBJECTS ARRAYS AT RUNTIME

// let msg = "LIFE AT EMUMBA";
// let newMsg = "IS NEW LIFE";
// console.log(`${msg} ${newMsg}`); //template literals
// console.log("another method is: " + msg + " " + newMsg);

// let message = "Hello"; //string objects are immutable
// message[1] = "A"; //wont happen
// console.log(message);

// let test = "EmumbaSoftware";
// console.log(test.slice(6));
// console.log(test.slice(0, 6)); //end index wont be included

// let myArray = [89, 65, 45, 12, 0, 47, 25];
// myArray.push(25);
// console.log(myArray);
// let splicedArray = myArray.splice(0, 6);
// console.log("splicedArray", splicedArray);
// console.log("myArray", myArray);

// let insertData = myArray.splice(0, 0, 123, 456);
// console.log("insertData", myArray);

//push->add at the end
//pop->remove from end
//shift->remove from front
//unshift=>add in front

let social = ["fb", "insta", "linkedin"];
// console.log(social.join(","));

console.log(social.indexOf("lol")); //-1 if not present
//remove through splice
// social.splice(0, 1);
// console.log(social);

//add through splice
// social.splice(0, 0, "Facebook", "Youtube");
// console.log(social);

//replace through splice
// social.splice(0, 1, "Replaced value");
// console.log(social);

//function declaration
function sum(a, b) {
  return a + b;
}

//functn expressions
const avg = function (a, b) {
  return (a + b) / 2;
};

//js is first class function language: because function is assigned as a value or function is treated as value

let x = avg(10, 5);
// console.log(x);

///functions are dynamic in js
function sum(a, b) {
  console.log(arguments);
  sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
// console.log(sum(1, 2, 3, 4));

//fat arrow function
const multiply = (a, b) => a * b;
// console.log(multiply(5, 4));

//Objects
let student = {
  fname: "fouzia",
  lname: "noor",
  age: 25,
  "is boolean": false,
};
let { fname, lname, age } = student; //destructuring
// console.log(fname, lname, age);
// console.log(student["is boolean"]);

//pass by value=> stores the actual value of variable - numbers, boolean, string, null
//pass by ref=> stores the adress rather than value - objects, arrays, functions

//Wrapper Objects
let msg = "Hello";
msg.type = "abc"; // new obj was created and destroyed
console.log(msg.type); //again new object is created because of .

//constructor funtion
function Student(fname, lname) {
  //let this={}
  this.fname = fname;
  this.lname = lname;
  this.getName = function () {
    console.log(`${this.fname} ${this.lname}`);
  };
  //return this;
}

const s1 = new Student("fouzia", "noor");
// console.log(s1);
// s1.getName();

//this is dynamic and is decided on runtime

//CALL,APPPLY,BIND
function Employee(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
function School(fname, lname) {
  this.fname = fname;
  this.lname = lname;
}
const getName = function (prefix, suffix) {
  console.log(`${prefix} ${this.fname} ${this.lname} ${suffix}`);
};
const emp1 = new Employee("fouzia", "noor");
const scl1 = new School("ffms", "jand");

getName.call(emp1, "Hi", "I am good");
getName.apply(scl1, ["Hi", "whats up"]);
let fn = getName.bind(scl1);
fn("A", "B");

////HOFUNCTION
//1.TAKE FUNCTION AS ARGUMENT
function power(a, b) {
  return Math.pow(a, b);
}
function oper(a, b, fn) {
  let result = fn(a, b);
  console.log(result);
}

oper(5, 2, power);
//2. RETURN A FUNCTION
function outer() {
  function inner() {
    console.log("Inner");
  }
  return inner;
}
let result = outer();
console.log(result);
result();

//setTimout=> call a function after a delay of sometime
//setInterval=> call a function repeatdely after specific delay

//to stop event bubbling, e.stopropagation is used

//JS is single threaded that means it is sync

//event loop=> exec stack, web apis(setTout,ajax,dom manipulation), msg queue
