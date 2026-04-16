function add(...numbers){
    let total=0;
    for(num of numbers){
        total+=num;
    }
    return total;
}
console.log(add(1,2,3));
console.log(add(10,20,30,40));