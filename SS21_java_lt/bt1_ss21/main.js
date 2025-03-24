let sum=0;

for(let i=1;i<=5;i++){
    let n=parseInt(prompt("nhap so nguyen thu "+i));
    if(isNaN(n)){
        alert("chi duoc nhap so");
        i--;
    }

    if(n%2!==0){
        sum+=n;
    }

}

alert("tong cua cac so le la: "+sum);