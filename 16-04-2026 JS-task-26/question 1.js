let arr=[1,2,3];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log('array using destructing');
const arr1=[1,2,3];
const [a,b,c] =arr1;
console.log(a);
console.log(b);
console.log(c);
console.log('Object Destructuring');
const obj={name:'venkat',age:21,gender:'male'};
const {name,age,gender}=obj;
console.log(name);
console.log(age);
console.log(gender);