let toan=parseFloat(prompt("nhap vao diem mon toan: "));
let van=parseFloat(prompt("nhap vao diem mon van: "));
let anh=parseFloat(prompt("nhap vao diem mon anh: "));

let tb=((toan+van+anh)/3).toFixed(2);
document.writeln("diem trung binh cua hs nay la: "+tb+"<br>");
if(tb>=8.0){
    document.writeln("gioi")
}else if(tb>=6.5 && tb<7.9){
    document.writeln("kha");
}else if(tb>=5.0 && tb<6.4){
    document.writeln("kha");
}else if(tb<5.0){
    document.writeln("yeu");
}else{
    document.writeln("diem bi loi");
}