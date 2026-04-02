//loop
//-------------------------------------
//for loop
for(let i=1;i<=10;i++){
    console.log(i);
}
//-------------------------------------
//while
let i=1;
while(i<=5){
    console.log(i);
    i++;
}
//-------------------------------------
//do while
let a=1;
do{
console.log(a);
a++;
}
while(a<=3);
//-------------------------------------
//using break and continue
for(let j=1;j<=10;j++){
    if(j===5){
        continue;
    }
    else if(j===8){
        break;
    }
    else{
        console.log(j);
    }
}