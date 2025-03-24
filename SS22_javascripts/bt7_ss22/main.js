arr=prompt("nhap 1 mang 1: ");
arr=arr.split("").map(Number)



   for(l=0;l<arr.length;l++){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
        }
    }
   }
    console.log(arr)

