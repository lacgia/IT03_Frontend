

function main(){
   let num= nhap();
console.log("so sau khi chuyen doi: "+check(num))
}


function nhap(){
    let num=0;
        do{
            num=Number(prompt("nhap vao chui so bat ki"));
        }while(isNaN(num))
       
   
    console.log(num)
    return num;
}

function check(num){
        let str=num.toString().split("");
        console.log(str)
str.sort((a,b) => b-a);
let lac =Number(str.join(''))
console.log(lac)
return lac;

}

main();