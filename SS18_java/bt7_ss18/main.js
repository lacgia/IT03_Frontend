let a=parseFloat(prompt("nhap vao so a: "));
let b=parseFloat(prompt("nhap vao so b: "));

let pt=prompt("nhap phep tinh ban muon(+,-,*,/)");
let ketqua;

if(pt=="+"){
    ketqua=a+b;
}else if(pt=="-"){
    ketqua=a-b;
}else if(pt=="*"){
    ketqua=a*b;
}else if(pt=="/"){
    ketqua=(a/b).toFixed(2);
}else{
    document.writeln("nhap sai r")
}
alert("ket qua la: "+ketqua);


