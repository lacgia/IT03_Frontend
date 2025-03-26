let arr=[];
let next="";
let lac="";

for(let i=0;i<=9;i++){
   let num=Number(prompt("nhap vao so nguyen thu: "+(i+1)))
   arr.push(num)
    if(num>10){
        next+=num+" "
    }else{
        lac+=num+" "
    }
}

console.log("cac so lon hon 10 la: "+next);
console.log("khong phai so lon hon 10 la: "+lac);
console.log("mang vua nhap"+arr)
