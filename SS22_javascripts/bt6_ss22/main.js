let arr=[3,3,3,3,3,6,7,8,6,9];
let checknum=[];

for(let i=0;i<arr.length;i++){
   if(!checknum.includes(arr[i])){
    count=0;
    for(let l=0;l<arr.length;l++){
        if(arr[i]==arr[l]){
            count++;
        }
        
    }

    console.log("so lan xuan hien cua "+arr[i]+" la: "+count);
    checknum.push(arr[i]);
   }
}