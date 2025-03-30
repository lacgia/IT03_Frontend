let arr=[];

function nhap(arr) {
    let n = Number(prompt("nhập số lượng số nguyên bạn muốn: "));
    for (let i = 0; i < n; i++) {
        let num=Number(prompt("nhập phần tử thứ: " + (i + 1)));
        if(isNaN(num) ){
            alert("nhập sai, mời nhập lại");
            i--;
    }else{
        arr.push(num);
    }

    }
}

function snt(arr){
    let snt = arr.filter(e=>{
        if(e<2){
            return false;
        }
        for(let i=2; i<=Math.sqrt(e); i++){
            if(e%i==0){
                return false;
            }
        }
        return true;
        }
    );
    alert("các cố là snt là: "+snt);
    }

function main(){
        nhap(arr);
        snt(arr);
}

main();