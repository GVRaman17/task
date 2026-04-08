let a=[];
for(let i=1;i<=5;i++){
    a.push(i);
}
console.log(a);
console.log("double:");
let b=a.map(b=>b*2);
console.log(b);
console.log("even filter:");
let c=a.filter(b=>b%2==0);
console.log(c);
console.log("reduce using sum the num:")
let d=a.reduce((a,c)=>a+c,0);
console.log(d);
let e=b.map(b=>b*2);
console.log(e);
console.log("find the greter than 10")
let f=e.find(a=>a>10);
console.log(f);
console.log("the num is in the array")
let g=a.includes(3);
console.log(g);
