let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));

if(a+b>c && a+c>b && b+c>a){
    if(a==b && b==c){
        document.writeln("tam gia deu");
    }else if(a==b|| b==c||a==c){
        document.writeln("tam giac can")
    }else if(a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a){
        document.writeln("tam gia v");
    }else{
        document.writeln("tam giac thuong");
    }



}else{
    document.writeln("khong tao thanh tam giac")
}