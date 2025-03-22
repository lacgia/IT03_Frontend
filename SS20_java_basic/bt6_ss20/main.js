let n=parseInt(prompt("nhap vao 1 so nguyen: "));

if(n<2|| isNaN(n)){
    alert(n+" khong phai la so nguyen to");
}else{
    let snt=true;
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            snt=false;
            break;
        }
    }
    if(snt){
        alert(n+" la so nguyen to");
    }else{
        alert(n+" khong la so nguyen to");

    }
}

