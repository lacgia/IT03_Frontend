let a=parseInt(prompt("nhap vao 1 so a: "));
let b=parseInt(prompt("nhap vao 1 so b: "));

let kq=1;
for(let i=0;i<b;i++){
    kq*=a;
}

alert("luy thu bac "+ b+ " cua " +a+" la "+ kq );