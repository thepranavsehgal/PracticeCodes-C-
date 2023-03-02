let div = document.quarySelectorAll('.item');
console.log(div)
for (let i=0;i<div.length;i++){
    div[i].innerText += ' - Course';
}