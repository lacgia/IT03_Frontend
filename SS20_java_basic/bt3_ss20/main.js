let str=prompt("nhap vao 1 chui so");
let dungsai =true;

if(isNaN(str)){
    alert("error!");
}else{
    for(let i=0 ;i<Math.floor(str.length/2); i++){
        if(str[i]!==str[str.length-1-i] ){
            dungsai=false;
            break;
        }
    }
}

alert(dungsai? str+" doi xung" :str+" khong doi xung" );