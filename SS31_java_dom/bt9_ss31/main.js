let list=[
    {
        id:1,
        task: "hit the gym",
        completed:false,
    },
    {
        id:2,
        task: "pey bill",
        completed:false,
    },
    {
        id:3,
        task: "mett gere",
        completed:false,
    },
    {
        id:4,
        task: "buy eag",
        completed:false,
    },
    {
        id:5,
        task: "read a boook",
        completed:false,
    },
    {
        id:6,
        task: "ogerzie offic",
        completed:false,
    },
]

let key=document.getElementById("myUL");

for(let i=0;i<list.length;i++){
    let li=document.createElement("li");
    li.textContent=list[i].task;

    let span=document.createElement("span");
    span.className="close";
    span.textContent="x";
 span.onclick=function (){
    this.parentElement.remove();
 };
    
    li.appendChild(span);
    key.appendChild(li);
}

let addli=document.getElementById("myInput");
let addbtn=document.querySelector(".addBtn")

function add(){
    let output=addli.value;

    if(output==""){
        alert("loi tast nhap vao:");
        return ;
    }

    let li=document.createElement("li");
    li.textContent=output;

    let span=document.createElement("span");
    span.className="close";
    span.textContent="x";

span.onclick= function (){
    this.parentElement.remove();
}

li.appendChild(span);
key.appendChild(li);
}


addbtn.onclick=add;