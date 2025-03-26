let lac=[];
let numam=0;
let n=Number("nhap vao so n: ");


if(isNaN(n)|| n<0){
    alert("sai so nhap vao")
}else if(n==0){
    alert("mang khong co khi gi het: ")
}

else{
    
     for(let i=0;i<n;i++){
        let num=Number(prompt("nhap vao so nguyen thu: "+(i+1)))
        if(num<0){
            numam++;
        }
     }
}

console.log("so nguyen am la: "+numam);


