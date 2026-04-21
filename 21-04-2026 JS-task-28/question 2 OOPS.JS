class vehicle{
    constructor (name){
        this.name=name;
    }
    display(){
        console.log(`vehicle type :${this.name}`);
        console.log('vehicle runing');
    }
}
let bike= new vehicle('bike');
let car=new vehicle('car');
bike.display();
car.display();