let n=parseInt(prompt("nhap vao 1 so n bat ki: "));

if(n<=0|| isNaN(n)){
    alert("loi");
}else{
    for(let i=0;i<n;i++){
        if(i%5==0){
            console.log("cac so chia het cho 5 tu 1 den "+n+" la: "+i);
        }
    }
}