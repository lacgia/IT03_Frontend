let n=parseInt(prompt("nhap vao 1 so bat ki: "));
let next="";
for(let i=1;i<=n;i++){
    if(n%i==0){
        next+=" "+i+" ";
    }
}

alert(next);