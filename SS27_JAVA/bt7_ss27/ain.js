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


function check(){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]!==arr[i]+1){
            return arr[i]+1;
        }
    }
    return null;
}

function main(){
    nhap();
    if(check()!==null){
        alert("so bi thieu cua mang la: "+check());
    }else{
        alert("khong co so nao bi thieu: ");
    }
}

main();