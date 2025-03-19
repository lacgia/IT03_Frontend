let epyear=parseInt(prompt("nhap vao so nam kn ban co: "));
if(epyear<=1){
    document.writeln("moi vao nghe");
}else if(epyear>=1 && epyear<=3){
    document.writeln("nhan vien co kn");
}else if(epyear>=4 && epyear<=6){
    document.writeln("chuyen vien");
}else if(epyear>6){
    document.writeln("quan ly");
}