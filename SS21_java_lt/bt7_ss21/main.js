let money=parseFloat(prompt("nhap vao so tien: "))
let ls=parseFloat(prompt("lai sua thang: "))
let month=parseFloat(prompt("month: "))


ls=ls/100;

let tienlai=money*ls*month;
let nextmoney=(money+tienlai);

alert("tien lai: "+tienlai.toFixed(2)+"  tong tien: "+nextmoney.toFixed(2));