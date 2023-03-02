let fun = ()=>{
    console.log(this);
}

let obj = {
    name: 'Coding Blocks',
    course: 'WebDev'
}

fun();

let person ={
    name: 'Vaibhav',
    gambler: true,
    gambling: ()=>{
        console.log(this);
    }
}
person.gambling();