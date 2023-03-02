function goaJayenge(placementStatus) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (placementStatus){
                resolve("okay time to go to GOA!");
            }
            else{
                reject("Lagg gai!!");
            }
        },3000);
    })
}

let p = goaJayenge(true);
p
.then((message)=>{
    console.log(message);
})
.catch((gandaMessage)=>{
    console.log(gandaMessage);
})