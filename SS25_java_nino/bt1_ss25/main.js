let arr=[1,2,3,4,5,6,7,8,9,10];
function hammin(arr){
    let min=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

alert("so nho nhat trong mang la: "+hammin(arr));