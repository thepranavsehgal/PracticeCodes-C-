let arr=[
    "Hello",1,2,3,"world",true
];
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift("jacnau");
console.log(arr);

arr[10]="some value";
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let obj1={
    x: 'Empty String',
    y: 'Space',
    z: 10
};
for(let i in obj1){
    console.log(obj1[i])
}

// let str="Coding Blocks";
// for(let c of str){
//     console.log(c);
// }

// let str = "Hello";

let ans = '';
for(let c of str){
    ans += c + ' ';
    // console.log(c)
}
console.log(ans);

//Functions banane ka tareeka number 1
function helloWorld(){
    console.log("Hello World");
}

helloWorld();
console.log(helloWorld());

function add(a,b){
    return a+b;
}
console.log(add(10,20));

//Functions banane ka tareeka number 2
let sub=function subtract(a,b){
    return a-b;
}
console.log(sub(10,20));

let sub1=function(a,b){
    return a-b;
}
console.log(sub1(100,20));


//EQUALITY
console.log(Infinity);
console.log(-Infinity);
console.log(3/0);

console.log(3+(-3));
console.log(Infinity+(-Infinity)); //NaN: not a number

console.log(1==1); //true
console.log(1==2); //false
console.log('' == 0);//true
console.log(+'');
// LOSE EQAULITY OPERATOR (==)
console.log("1=='1'",1=='1');//true
// STRICT EQUALITY OPERATOR
console.log("1=='1'",1=='1');//true

// a=10;
// b=10;
// a==b;

console.log(" '' == [] ",''==[]); //true
console.log(" 0 == [] ",[] == 0); // true

console.log(" '' == 0 ",''== 0); //true
console.log(" '\\t' == 0 ",'\t'==0); //true
console.log(" '\\t'=='' ",'\t'=='');

//parseInt and parseFloat
let str = "123";
let num = parseInt(str);
console.log(num);

str="abc123"
num=parseInt(str);
console.log(num);