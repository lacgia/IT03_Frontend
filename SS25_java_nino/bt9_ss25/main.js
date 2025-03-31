let user=[];



function check(email){
    let check=false
    if(email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))){
        return true
    }
    return false
}

function checktrueemail(){
    let email=prompt("nhap vao emali tai khoang you want dang ki: ");

    if(check(email)){
        if(user.includes(email)){
            alert("tai khoang email da tontai");
           checktrueemail();
        }else{
            user.push(email);
            alert("cac email sau khi nhap la: "+user);
            checktrueemail();
        }
    }else{
        alert("email nhap vao co loi phai co @ và duôi .com or .vn")
        checktrueemail();
}

}
checktrueemail();




