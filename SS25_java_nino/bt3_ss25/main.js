let n=Number(prompt("Nhap so phan tu cua mang: "));
let arr=[];

for(let i=0;i<n;i++){
    let num=Number(prompt("Nhap so thu "+(i+1)+": "));
    arr.push(num);
}

function sochan(arr){
    let chan=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            chan.push(arr[i]);
        }
    }
    return chan;
}

alert("cac so chan co trong mang la: "+sochan(arr));