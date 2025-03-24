let d=parseInt(prompt("nhap vao chieu dai"));
let r=parseInt(prompt("nhap vao chieu rong"));


for(let i=0;i<d;i++){
    if(i==0 || i==d-1){
        console.log("*".repeat(r)+"<br>");
    }else{
        console.log("*"+ " ".repeat(r-2)+ "*" + "<br>");
    }
}   
