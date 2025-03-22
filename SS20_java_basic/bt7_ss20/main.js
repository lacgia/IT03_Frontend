let n=parseInt(prompt("nhap vao so fibonaci muon: "));

if(isNaN(n) || n<=0){
    alert("sai so nhap vao!");
}else{
    let a=1, b=1;
    let fibonaci=a;
    if(n>1){
        fibonaci+=" "+b;
    }


    for(let i=3;i<=n;i++){
        let next=a+b;
        fibonaci+=" "+next;
        a=b;
        b=next;
    }

    alert(fibonaci);
}