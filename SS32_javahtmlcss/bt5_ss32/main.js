let valueadd=document.getElementById("name");

let  li=document.getElementById("list");
let butadd=document.getElementById("butadd")
let lac =document.getElementById("boxx")
let list=[
    {name: "gia huy"}
]

function add(){
    let input=valueadd.value;
    if(input==""){
        alert("khong duoc nhap trong");
        return ;
    }
    let p=document.createElement("p");
    let but=document.createElement("button");
    let div=document.createElement("div");
    let hr=document.createElement("hr");
    div.className="li";
    p.textContent=input;
    but.className="x";
    but.textContent="x";

    but.onclick=function(){
        this.parentElement.remove();
    }
    div.appendChild(p);
    div.appendChild(but);
    lac.appendChild(div);
    lac.appendChild(hr);
    valueadd.value="";
  




}

butadd.onclick=add;