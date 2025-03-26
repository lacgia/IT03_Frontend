let n=Number(prompt("nhap vao so n"));
let arr=[];
let sum=0;
let so=false;

if(isNaN(n)|| n<0){
    alert("sai so nhap vao: ");
}
else{for(let i=0;i<n;i++){
    let key=prompt("nhap vao ki tu "+(i+1));
    arr.push(key);
    if(!isNaN(key)){
        sum+=Number(key);
        so=true;
    }
}
}

console.log("mang: "+arr);
if(so){
    console.log("tong so trong mang: "+sum);
}else{
    console.log("khong co so nao trong mang");
}
