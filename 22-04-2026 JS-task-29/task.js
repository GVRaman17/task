setTimeout(()=>console.log('printing after 2 sec'),2000);
let count=0;
let interval=setInterval(()=>
    {count++;
if(count>5){
    clearInterval(interval);
}
else{
    console.log(count);
}},1000)
//synchronus
console.log('hi')
console.log('bye')
//asynchronus
//setTimeout and setInterval
//setTimeout(function,time in milliseconds)
console.log('hello');
setTimeout(()=>{
    console.log("5 second");
},5000);