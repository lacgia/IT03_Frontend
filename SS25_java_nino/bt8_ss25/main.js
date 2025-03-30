let key=prompt("nhap vao password");
console.log(key);

function checkpass(key){
        if(key.length<8){
            return false;
        }
    let chuhoa=false;
    let chuthg=false;
    let chuso=false;

    for(let i=0;i<key.length;i++){
        let char=key[i];

        if(char>='A' && char<='Z'){
            chuhoa =true
        }else if(char>='a' && char<='z'){
            chuthg=true;
    }else if(char>='0' && char<='9'){
        chuso=true;
    }


        if(chuhoa&& chuso&& chuthg){
            return true;
        }
}
return false;
}

if(checkpass(key)){
    console.log("password du manh: "+key);
}else{
    console.log("password khong du manh: "+key);
}