let n=0;
let arr=[];

function nhap(arr){
    n=Number(prompt("nhập số lượng số bạn muốn: "));
    for(let i=0;i<n;i++){
        let num=Number(prompt("nhập phần tử thứ: "+(i+1)));
        if(isNaN(num)){
            alert("nhập sai, mời nhập lại");
            i--;
        }else{
            arr.push(num);
        }
    }
    console.log(arr);
    return arr;
}

function check(arr){
    let arr1=arr.map(num=>num**2);
    let arr2=arr1.filter(num=>num%2==0);
    return {
        arr1,arr2
    }
}

function main(){
    nhap(arr);
    let lac=check(arr);
    console.log("mảng sau khi bình phương: "+lac.arr1);
    console.log("mảng sau khi lọc số chẵn: "+lac.arr2);

}

main();
