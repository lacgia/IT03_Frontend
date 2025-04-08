let but=document.getElementById("but");
let num=document.getElementById("num");


let count=0;
function click(){
     count++;
     num.textContent=count;
}

but.onclick=click;