let a=parseInt(prompt("nhap vao 1 so a: "));

let cb2ofa=Math.sqrt(a);
let ketqua=(cb2ofa === Math.floor(cb2ofa))? a +" phai la so chinh phuong" : a +"khong phai la so chinh phuong";
document.writeln(ketqua);