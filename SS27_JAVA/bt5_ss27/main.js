let arr=[];
let n=0;
let num=0


function nhap(){
    
    n=parseInt(prompt("nhap vao do dai cua mang con"));
     num=parseInt(prompt("nhap vao do dai cua mang cha"));
if(n>0 && !isNaN(n)){
    for(let i=0;i<num;i++){
        arr[i]=Number(prompt("nhap vao phan tu thu "+(i+1)));
    }
}

}

function mangcon(arr,n){
    let motmangcon=[]
    let kq=[];

    for(let i=0;i<arr.length;i++){
        motmangcon.push(arr[i])
    
    if(motmangcon.length==n){
        kq.push(motmangcon);
        motmangcon=[];
    }
    }

    if(motmangcon.length>0){
        kq.push(motmangcon);
    }

    return kq;
}

function main(){
    nhap();
   
    console.log("mang sau khi chia la: ",mangcon(arr,n))
}

main()