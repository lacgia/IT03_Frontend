let y=parseInt(prompt("nhap vao so nam ban muon bien nhuan hay khong: "));

if((y%4==0 && y%100!=0) || (y%400==0)){
    document.writeln(y+" la nam nhau");
}else{
    document.writeln(y+" khong phai nam nhuan");
}