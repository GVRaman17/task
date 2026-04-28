function A(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a = true;
            if(a){
                resolve("this is first statement but print two sec after");
            }
            else{
                reject("it first statement rejecting")
            }
            
        },2000)
    })
}
function B(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a = true;
            if(a){
                resolve("this is second statement but print one sec after");
            }
            else{
                reject("it second statement rejecting")
            }
        },1000)
    })
}
function C(){
    return new Promise((resolve,reject)=>{
        let a = false;
            if(a){
                resolve("this is final statement");
            }
            else{
                reject("it final statement rejecting")
            }
    })
}
async function runTask() {
    try{
        let A1= await A();
        console.log(A1);   
        let B2= await B();
        console.log(B2); 
        let C3= await C();
        console.log(C3);
    }
    catch(error){
        console.error(error);
    }
}
runTask();

