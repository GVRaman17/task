function add(a,b,callback){
    return callback(a+b);
}
function mul(a){
    return a*5;
}
let result=add(1,2,mul);
console.log(result);