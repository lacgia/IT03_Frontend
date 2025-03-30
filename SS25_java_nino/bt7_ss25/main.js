let arr=prompt("nhap vao cac chu cai de in hoa chu dau");
console.log(arr);

function inhoa(arr){
    let result="";
    let viethoanext=true;

    for(let i=0;i<arr.length;i++){
        let key =arr[i]
       if(viethoanext && key >='a' && key <='z'){
           result += key.toUpperCase();
         
    }else{
        result += key;
    }
    viethoanext =(key==" ")
}
return result;

}

console.log(inhoa(arr));