arr=[];
for(let i=1;i<=5;i++){
    arr.push(i);
}
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}