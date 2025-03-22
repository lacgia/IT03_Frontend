let str=prompt("nhap chui string bat ki: ");
let key=prompt("ki tu muon tim: ");
let find=false;

for(let i=0;i<str.length;i++){
    if(str[i]==key){
        find=true;
        break;
    }
}

if(find){
    alert("ki tu co ton tai "+ key);
}else{
    alert("khong ton tai ki tu can tiem");
}


