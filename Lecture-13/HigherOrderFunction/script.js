function houseTask(jhaaduLagana,BartanDhona){
    jhaaduLagana();
    BartanDhona();

    return dihadhiMillGayi;
}

function dihadhiMillGayi(){
    console.log("poora 100 rupay mile");
}

function jhaaduLagana(){
    console.log("saaf safai ho gayi");
}

function BartanDhona(){
    console.log("saare bartan saaf ho gaye");
}

let x = houseTask(jhaaduLagana,BartanDhona);
x();





// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));