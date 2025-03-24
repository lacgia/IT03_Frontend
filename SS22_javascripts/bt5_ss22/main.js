let arr=prompt("nhap 1 so nguyen gom 5 chu so: ");

if(isNaN(arr)){
    alert("loi");
}else{
    let lenum=0;
    let channum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            channum+=i;
        }else{
            lenum+=i;
        }
    }

    alert("tog so chan= "+channum+"\n" +"tống so le= "+lenum);

}