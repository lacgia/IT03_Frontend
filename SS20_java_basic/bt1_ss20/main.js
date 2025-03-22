let number=parseInt(prompt("nhap vao 1 so nguyen"));

let ketqua=0;
if(number<=0||isNaN(number)){
    alert("du lieu nhap vao sai")
}else{
    for(let i=1;i<=number;i++){
        ketqua+=i;
    }
    
    alert("oupot: "+ ketqua);   
}