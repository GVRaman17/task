function check(a){
    return new Promise((resolve,reject)=>{
        if(a>0){
            resolve("it is resolve " + a);
        }
        else{
            reject("it is a rejection")
        }
    })
}
check(-2).then((result)=>{
    console.log(result);
    console.log('...')
})
.catch((error)=>{
    console.error(error);
})