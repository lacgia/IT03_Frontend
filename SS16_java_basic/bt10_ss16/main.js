let num1=Number(prompt("nhap vao so 1"));
let num2=Number(prompt("nhap vao so 2"));

let randomnum= Math.floor(Math.random()*(num2-num1+1))+num1;

document.writeln("so ngau nhien giua 2 so la: "+ randomnum);