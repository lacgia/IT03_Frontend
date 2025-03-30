let arr=[];

let n=Number(prompt("Nhap so phan tu cua mang: "));

if(n<0 || isNaN(n)){
    alert("Nhap so thoi !!");
}else{
    for(let i=0;i<n;i++){
        arr[i]=Number(prompt("Nhap phan tu thu "+(i+1)+": "));
    }
}

function songuyend(arr){
    let nd=[]
    for(let i=0;i<n;i++){
        if(arr[i]>0 && Number.isInteger(arr[i])){
            nd.push(arr[i]);
        }
    }
    return nd;
}

alert("cac so nguyen duong trong mang la: "+songuyend(arr))