let arr=prompt("nhap 1 mang so :vvvv ");
arr=arr.split("").map(Number)
let check=[];

for(let i=0;i<arr.length;i++){
    let num=arr[i];
    if(check[num]==undefined){
        check[num]=1;
    }else{
        check[num]++;
    }

maxcount=0;
minvalue=Infinity;

for(let j=0;j<arr.length;j++){
    let lac=arr[i];
    let count=check[num]

    if(count>maxcount){
        maxcount=count;
        minvalue=num
    }else if(count==maxcount && num<minvalue){
        minvalue=num;
    }
}
}

alert("so co so lan xuat hien nhieu nhat nhung co gia tri nho nhat la: "+ minvalue);