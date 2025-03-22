let n=parseInt(prompt("nhap vao n so nguyen to dau tien: "));

let kt=true;
if(isNaN(n)||n<=1){
    alert("khong phai la so nguyen to");
}else{
   let numstar=2;
   let output="";
   let count=0;

   while(count<n){
    let snt=true;
    
    for(let i=2;i<=Math.sqrt(numstar);i++){
        if(numstar%i==0){
            snt=false
            break;
        }
    }
     if(snt){
        output+=numstar+" ";
        count++;
     }

    numstar++;
   }

   alert(output);
}