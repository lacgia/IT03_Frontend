let n=prompt("nhap vao so n");
let realnum="";
let key="";
let arr=[];

if(isNaN(n)|| n<0){
    alert("sai so nhap vao: ");
}else{
    for(let i=0;i<n;i++){
        let k=prompt("nhap vao ki tu thu: "+(i+1));
        arr.push(k)
        if(isNaN(k)){
            key+=k+" "
        }else{
            realnum+=k+" "
        }
    }
}

console.log("so ki tu so: "+realnum);
console.log("so ki tu chu: "+key);
console.log(arr);