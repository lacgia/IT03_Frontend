let oddNumber=0;
let evenNumber=0; 

for(let i=1;i<=5;i++){
    let n=parseInt(prompt("nhap vao so nguyen thu: "+i));

    if(isNaN(n)){
        i--
        continue;
    }

    if(n%2!==0){
        oddNumber++
    }else{
        evenNumber++
    }


}

alert("so luong so le la: "+oddNumber
    +"so luong so chan la"+ evenNumber
)