let pass=document.getElementById("pass");
let namee=document.getElementById("name");
let keyname="lacgia"
let keypass="kurumi"

function login(){
    if(namee.value===keyname && pass.value===keypass){
        alert("dang nhap thanh cong");
    }else{
        alert("dang nhap that bai");
    }
}