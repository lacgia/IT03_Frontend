

function check() {
    let email = document.getElementById("exampleInputEmail1").value.trim();
    let password = document.getElementById("exampleInputPassword1").value.trim();

    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError")

    let harError = true;

    if (!email) {
        emailError.classList.remove("d-none");
        emailError.textContent = ("cannot be left blank")
        harError=false;
    }

    if (!password) {
        passError.classList.remove("d-none");
        passError.textContent = ("cannot be left blank")
        harError=false;
    }

    if(!harError){
        return;
    }
    const user = JSON.parse(localStorage.getItem("users")) || [];
    console.log=(user);
    const userCheck=user.find(lac=>lac.email==email && lac.password==password);

    if(userCheck){
      window.location.href="chucmung.html"
        console.log(user);
    }else{
        passError.classList.remove("d-none");
        passError.textContent = ("incorect email or password")
        harError=false;
    }
}


