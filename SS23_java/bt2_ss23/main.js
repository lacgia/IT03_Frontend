let arr=[];
let index=0;
let max=0;
let n=Number(prompt("nhap vao so luong so muon nhap: "));

for(let i=0;i<n;i++){
    let num=Number(prompt("nhap vao so nguyen thu: "+(i+1)))
    arr.push(num)
    if(num>arr[i-1]){
        index=i;
        max=num;
    }
}

console.log("so lon nhat trong mang la: "+max);
console.log("vi tri so lon nhat trong mang la: "+index);