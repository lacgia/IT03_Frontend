let a=prompt("nhap vao so a: ");
let b=prompt("nhap vao so b: ");
let c=prompt("nhap vao so c: ");


if(a==0){
    if(b==0){
        if(c==0){
            alert("phuong trinh co vo so n")
        }else{
            alert("phuong trinh vo nghiem")
        }
    }else{
        let x=-c/b;
        alert("pt co 1 n duy nhat la: "+x)
    }
}else{
    let d=b*b-4*a*c;
    if(d<0){
        alert("pt vo nghiem")
    }else if(d==0){
       let x=-b/(2*a);
        alert("pt co nghiem kep"+x);

    }else{
        let x1=(-b+Math.sqrt(d))/(2*a);
        let x2=(-b-Math.sqrt(d))/(2*a);
        alert("pt co 2 n phan biet la: "+x1+x2);
    }
}