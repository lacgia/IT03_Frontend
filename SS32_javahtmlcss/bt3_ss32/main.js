let input=document.getElementById("name");
let li=document.getElementById("list");
let but=document.getElementById("but");

let count=0;
function add(){
    let output=input.value;
    if(input.value==""){
        alert("loi input dau vao:");
        return ;
    }
    count++;
    let list=document.createElement("li");
    list.textContent=output

    li.appendChild(list)
}

but.onclick=add;

