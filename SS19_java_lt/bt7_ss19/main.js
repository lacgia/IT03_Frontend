let a=parseFloat(prompt("nhap vao so a: "));
let b=parseFloat(prompt("nhap vao so b: "));
let c=parseFloat(prompt("nhap vao so c: "));

let maxnum=(a>b)? ((a>c)? a:c): ((b>c)? b:c);

alert("max num= "+maxnum);