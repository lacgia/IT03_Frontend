let arr=prompt("nhap ao 1 day so bat ki");
if(isNaN(arr)){
    alert("loi");
}else{
    arr=arr.split("").map(Number);
    let max=arr[0];
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }
}

alert("max= "+max)
}
