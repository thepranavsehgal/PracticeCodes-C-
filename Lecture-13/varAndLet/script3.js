let a = 100;
function hello(){
    // console.log(a); we can not use it before initialization
    let a=10;
    console.log(a); //10
}

hello();
console.log(a); //100
a=2000;
console.log(a); //2000