let arr=[];
let n=0;


function nhap(){
    n=parseInt(prompt("nhap vao do dai cua mang "));
if(n>0 && !isNaN(n)){
    for(let i=0;i<n;i++){
        let num=Number(prompt("nhap vao phan tu thu "+(i+1)));
        if(isNaN(num)){
            alert("loi");
            i--
        }else{
            arr.push(num);
        }
    }
}else{
    alert("loi");
    nhap();
    
}

}

function capsocoong(arr){
    let lac=arr[1]-arr[0];

    for(let i=1;i<n-1;i++){
        if(arr[i+1]-arr[i]!=lac){
            return false;
        }
    }
return true;
}

function main(){
    nhap();
   if(capsocoong(arr)){
    alert(arr+" la mot cap so cong")
   }else{
    alert("khong phai csc");
   }
}

main();