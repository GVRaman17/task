console.log("-----------------------------------");
console.log("data type");
console.log("-----------------------------------");
let Name = "venkat"; //String
let age = 22; //Number
let isstudent = true; //Boolean
let id=null;//Null value
let undefined; //undefined
let no=12343354354354n;//BigInt
let array=[1,2,3];//object
console.log(typeof(Name)+" => "+Name);
console.log(typeof(age)+" => "+age);
console.log(typeof(isstudent)+" => "+isstudent);
console.log(typeof(id)+" => "+id);
console.log(typeof(undefined));
console.log(typeof(array)+" => "+array);
console.log(typeof(no)+" => "+no);

//arithmatic
console.log("-----------------------------------");
console.log("Arithmatic operator");
console.log("-----------------------------------");
let a = 10;
let b = 5;
console.log("add: "+(a+b));
console.log("sub: "+(a-b));
console.log("mul: "+(a*b));
console.log("div: "+(a/b));
console.log("reminder: "+(a%b));
console.log("-----------------------------------");
console.log("comparison operator");
console.log("-----------------------------------");
//comparison
let x = 5;
let y = "5";
console.log("== : "+(x == y));  // true  (checks value only)
console.log("=== : "+(x === y)); // false (checks value + type)
console.log("-----------------------------------");
console.log("logical operator");
console.log("-----------------------------------");
//logical
let num = 18;
let hasID = true;
console.log("AND: "+(num >= 18 && hasID)); // true (AND)
console.log("OR :"+(num < 18 || hasID));  // true (OR)