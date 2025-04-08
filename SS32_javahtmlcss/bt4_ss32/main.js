let input=document.getElementById("email");
let butt=document.getElementById("but");
let hs=document.getElementById("alet");


function check(){
    let temp=input.value;
    if(temp=="" || !temp.endsWith("@gmail.com")){
        alet.textContent="loi nhap email"
        alet.style.color="red";
    }else{
        alet.textContent="nhập vào email thành công";
        alet.style.color="green";
    }
    
}

butt.onclick=check;

