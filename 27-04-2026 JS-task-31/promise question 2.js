function add(a,b,bol){
    return new Promise((resolve,reject)=>{
        if(bol){
            resolve("Promise is accepted "+ (a+b));
        }
        else{
            reject("it is rejected");
        }
    })
    }
add(1,2,true)
    .then((result)=>{
        console.log(result)
    })
