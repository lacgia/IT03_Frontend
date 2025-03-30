let arr=[];

function nhap(arr){
    let n=Number(prompt("nhập số lượng số bạn muốn: "));
    for(let i=0;i<n;i++){
        let num=Number(prompt("nhập phần tử thứ: "+(i+1)));
        if(isNaN(num)){
            alert("nhập sai, mời nhập lại");
            i--;
        }else{
            arr.push(num);
        }
    }
    return arr;
}


function check(arr){
    let max=Math.max(...arr);
    let index=arr.indexOf(max);
    alert("phần tử lớn nhất là: "+max+" ở vị trí: "+index);
}

function main(){
    nhap(arr);
    check(arr);
}

main();
