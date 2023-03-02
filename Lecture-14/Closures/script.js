function outerFun(){
    console.log("inside outer fun");
    let a=1;

    function innerFun(){
        // console.log("inside inner fun");

        a++;
        return a;
    }

    return innerFun;
}

let fun = outerFun();
console.log(fun());
console.log(fun());
console.log(fun());

let fun1=outerFun();
console.log(fun1());
console.log(fun1());
console.log(fun1());