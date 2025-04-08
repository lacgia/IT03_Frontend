let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");


let click=document.getElementById("img")
let body=document.getElementById("body")

function showimg(img){
    img.style.width="1000px"
    img.style.height="1000px"
    img.style.transition="0.5s"
    body.style.backgroundColor="black"
}

function hideimg(){
    img1.style.width="200px"
    img2.style.width="200px"
    img3.style.width="200px"
    img1.style.height="200px"
    img2.style.height="200px"
    img3.style.height="200px"
    body.style.backgroundColor="white"
}

img1.onclick=function(event){
    event.stopPropagation();
    showimg(img1);
}

img3.onclick=function(event){
    event.stopPropagation();
    showimg(img3);
}

img2.onclick=function(event){
    event.stopPropagation();
    showimg(img2);
}

body.onclick=function(){
    hideimg();
}




