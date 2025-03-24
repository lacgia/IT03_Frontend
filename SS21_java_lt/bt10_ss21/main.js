let n=parseInt(prompt("nhap vao n so nt: "));
let next="";
let count=0;
let num=2;

if(isNaN(n) || n<2){
    alert("sai so n");
}else{
   while(count<n){
    let ys=true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            ys=false;
            break;
        }
    }

    if(ys){
        next+=" "+num+" ";
        count++;
    }

    num++
   }
}

alert(next);
