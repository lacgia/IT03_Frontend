let pas=document.getElementById("pas");
let eye=document.getElementById("eye");

function check(){
    let icon=this;
    if(pas.type==="password"){
        pas.type="text"
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    }else{
        pas.type="password"
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")

    }
}

eye.onclick=check;