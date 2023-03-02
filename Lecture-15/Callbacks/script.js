function download(URL,cb){
    console.log("Download starts");
    setTimeout(function(){
        console.log("Download Finish");
        file=URL.split('/').pop();
        cb(file,upload);
    },2000);
}

function compress(file,cb){
    console.log("compress starts");
    setTimeout(function(){
        console.log("Compression Ends");
        let cfile=file.split('.')[0]+'.zip';
        cb(cfile,allDone);
    },2000);
}
function upload(cfile,cb){
    console.log("uploading starts");
    setTimeout(function(){
        console.log("uploading ends");
        let newUrl='http://mysongs/'+cfile;
        cb(newUrl);
    },2000);
}

function allDone(newUrl){
    console.log("Sab kuch badhiya ho gaya");
    console.log(newUrl);
}

download('http://songs/file.mp4',compress);