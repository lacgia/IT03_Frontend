let arr=[];

function check(arr){
    for(let i=0;i<5;i++){
        let k=prompt("nhap vao so thu: "+(i+1));
        arr.push(k);
    }
    let kq=[];
    kq= arr.filter(str=>str.length>5);
    return kq;
}
console.log("phan tu co do dai lon hon 5: "+JSON.stringify(check(arr)));