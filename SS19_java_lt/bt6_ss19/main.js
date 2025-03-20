let a=prompt("nhap a:");
let b=prompt("nhap b:");
let c=prompt("nhap c:");

if(a==0){
    if(b==0){
        alert(c==0? "pt co vs n":"pt vo n");
    }else{
        let x=-c/b;
        alert("phuong trinh co 1 nghiem: "+x);
    }
}else{
    let deta=b*b-4*a*c;
    if(deta<0){
        alert("pt vo n");
    }else if(deta==0){
        let x=-b/(2*a);
        alert("pt co n kep"+x);
    }else{
        let x1=(-b+Math.sqrt(deta))/(2*a);
        let x2=(-b-Math.sqrt(deta))/(2*a);
        alert("pt co 2 n"+x1 +" va "+ x2);
    }
}