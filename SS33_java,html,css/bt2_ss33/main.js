let input=document.getElementById("input");
let but=document.getElementById("but");
let tb=document.getElementById("permittion")


function check(){
    let count=0;
    let output=input.value
    if(output.length==0){
        alert("loi")
        return;
    }else{
        for(let i=0;i<output.length;i++){
            count++;
        }
    }
    tb.textContent="so ky tu la: "+count;
}

but.onclick=check;