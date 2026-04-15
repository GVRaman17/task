const name="venkat";
console.log("the name is constent"+' '+name);
let age = 21;
console.log("the age is let"+' '+age);
age = 22;
console.log("after update the age"+' '+age);
console.log(`My name "${name}" my age is "${age}"`);
function display(name="guest"){
console.log(`function with defaut paramater ${name}`);
}
display();
display("venkat");