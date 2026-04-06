console.log("function to add two numbers.");
function add(a,b){
    console.log(a+b);
}
add(1,2);
console.log("expression function to multiply two numbers.");
let mul=function(a,b){console.log(a*b)};
mul(2,3);
console.log("arrow function to subtract two numbers");
let sub=(a,b)=>console.log(a-b);
sub(10,5);
console.log("function with parameters and return a value.");
function divied(a,b){
    return(a/b);
}
console.log(divied(10,5));
console.log("Demonstrate global vs local scope.");
let a=10;//Global variable or Scope
if(true){
    console.log("its a global scope",a);
    let b=5;
    console.log("its a local scope",b)
}
