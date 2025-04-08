let container_parent=document.getElementById("container-parent")
let container_chil=document.getElementById("container-chil")
let butincre=document.getElementById("but1")
let butdecre=document.getElementById("but2")


let  width=0;
function incre(){
   if(width<100){
    width+=10;
    container_chil.style.width=width+"%";
   }
}

function decre(){
   if(width>=0){
    width-=10;
    container_chil.style.width=width+"%";
}
   }

butdecre.onclick=decre;
butincre.onclick=incre;