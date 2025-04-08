let key=document.getElementById("but")
let box=document.getElementById("box")

function but(){
    let color= "#"+Math.floor(Math.random()*16777215).toString(16);
    box.style.backgroundColor=color;
}


key.onclick=but;