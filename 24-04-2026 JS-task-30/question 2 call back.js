function greet(name,callback){
    console.log(`Hi, ${name}`);
    callback(name);
}
function sayhi(name){
    console.log(`hello ${name} it's a call back function`)
}
greet('venkat',sayhi);