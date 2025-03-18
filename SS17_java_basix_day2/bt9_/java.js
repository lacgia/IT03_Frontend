let a=parseFloat(prompt("nhap vao a: "));
let b=parseFloat(prompt("nhap vao b: "));
let c=parseFloat(prompt("nhap vao c: "));

let deta=b*b-4*a*c;
let X1=(-b+Math.sqrt(deta))/(2*a);
let X2=(-b-Math.sqrt(deta))/(2*a);

document.writeln("nghiem cua ban la: X1="+X1+"X2="+X2);