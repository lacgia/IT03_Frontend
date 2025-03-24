let num=parseInt(prompt("nhap vao so nguyen bat ki: "));
let ys=true;

if(isNaN(num)){
    alert("so nhap vao sai dinh dang: ");
}else{
    if(num<=1){
        alert("khong phai la snt");
    }else{
        for(let i=2;i<Math.sqrt(num);i++){
            if(num%i==0){
                ys=false;
            }
        }
    }
}

if(ys){
    alert(num+" la snt");
}else{
    alert(num+" khong phai la snt")
}