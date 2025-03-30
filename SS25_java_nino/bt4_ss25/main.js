let n=Number(prompt("Nhap so nguyen duong bat ki: "));

function checksnt(n){
    if(n<2 || isNaN(n)){
        return false;
    }else{
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i==0){
                return false;
            }
        }
        return true;
    }
}

if(checksnt(n)){
    alert(n+" la so nguyen to");
}else{
    alert(n+" khong phai la so nguyen to");
}