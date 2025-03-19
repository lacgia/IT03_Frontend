let firt1=prompt("nhap vao ten: ");
if(firt1=="ADMIN"){
    let secon=prompt("nhap vao mat kahu: ");
    if(secon=="themaster"){
        document.writeln("wellcone");
    }else if(secon==null){
        document.writeln("cancelled");
    }else{
        document.writeln("worong pasword")
    };
}else if(firt1==null){
    document.writeln("cancelled");
}else{
    document.writeln("i don kơn you");
}
