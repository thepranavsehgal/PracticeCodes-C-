class Vehicle {
    constructor(name,year,speed,price){
        this.name = name;
        this.year = year;
        this.speed = speed;
        this.isMehngi = () =>{
            price > 20 ?
            console.log("Mehngi hai"):
            console.log("Sasti hai")
        }
    }

    print() {
        console.log("Name: ",this.name);
        console.log("Year: ",this.year);
        console.log("Speed: ",this.speed);
        console.log();
    }
}