let n=Number(prompt("nhap vao n"));
let arr=[];
let max1=0;
let max2=0;

if(isNaN(n)){
    alert("sai so nha vaao ");
}else{
 

    for(let i=0;i<n;i++){
        let num=Number(prompt("nhap vao so nguyen thu "+(i+1)));
        arr.push(num);
        if(max1<num){
            max2=max1
            max1=num;
        }else if(num<max1 && num> max2){
            max2=num;
        }
    }
}
console.log("so lon thu 1: "+max1);
console.log("so lon thu 2: "+max2);
console.log("mang: "+arr);