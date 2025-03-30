let arr=prompt(" nhap mang bat ki kiem tra doi xung: ");

function isPalindrome(arr){
    for(let i=0;i<(arr.length/2);i++){
        if(arr[i]!=arr[arr.length-1-i]){
            return false;
        }
    }
    return true;
}

if(isPalindrome(arr)){
    alert(arr+" la mang doi xung");
}else{
    alert(arr+" khong phai la mang doi xung");
}