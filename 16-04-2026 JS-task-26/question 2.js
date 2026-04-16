const orginal=[1,2,3];
const copy=[...orginal];
copy.push(4);
console.log('using spread operator dont change orginal arr');
console.log(orginal);
console.log(copy);