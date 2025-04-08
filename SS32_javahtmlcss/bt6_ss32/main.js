let text=document.getElementById("text");
let but1=document.getElementById("but1")
let but2=document.getElementById("but2")

let valuesize=20;

function increde(){
    valuesize+=5;
    text.style.fontSize=valuesize+"px";
}

function decrede(){
    valuesize-=5;
    text.style.fontSize=valuesize+"px";
}

but1.onclick=increde;
but2.onclick=decrede;