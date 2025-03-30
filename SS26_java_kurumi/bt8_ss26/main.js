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


function checksnt(num){
    if(num<2 || num==2){
        return false;
    }else{
        for(let i=2;i<=Math.sqrt(num);i++){
            
            if(num%i==0){
                return false;
            }
        }
    }
    return true;
}



function check(arr){
    let arr1=arr.filter(num=>checksnt(num));
    return arr1;
    
}
function main(){
    nhap(arr);
    let lac=check(arr);
    console.log("mang sau khi loc cac so la snt: "+lac);
   
}

main();