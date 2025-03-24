let arr=[1,2,3,4,5];
let key=parseInt(prompt("nhap vao so: "));
let ys=false;
for(let i=0;i<arr.length;i++){
    if(key==arr[i]){
        ys=true;
        break;
    }
}

if(!ys){
    alert("sai r!")
}else{
    alert("bingo!!")
}
