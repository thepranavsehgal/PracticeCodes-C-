function home(cleaning, learning){
    cleaning();
    learning();
    return function earning(){
        console.log("business");
        return function sleeping(){
            console.log("to sleep");
        }
    }
}
let x=home(cleaning,learning);
let y=x();
y();

function cleaning(){
    console.log("mop");
}

function learning(){
    console.log("coding");
}

// function earning(){
//     console.log("business");
// }