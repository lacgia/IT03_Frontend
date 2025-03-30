let arr = [];

function check(arr){
    let n = 10;
    for (let i = 0; i < n; i++) {
        let k = prompt("nhap vao so thu: " + (i + 1));
        if (isNaN(k) || k < 0) {
            alert("nhap vao so");
            i--;
        } else {
            arr.push(k);
        }
    }
    let result=[];
    result = arr.filter(num => num >= 10);
    return result;
}

console.log("so lon hon hoac bang 10: " + check(arr));


