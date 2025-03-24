
let arr=prompt("nhap vao 1 day so: ");

if(isNaN(arr)){
    alert("loi");
}else{
    newarr=arr.split("").reverse().join("");
    alert("output= "+newarr)
}


