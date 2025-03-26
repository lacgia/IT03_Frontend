let array=
    ["", false, 0, 5, 10, "Hello world!"];
let truee=[];
console.log(array)

for(let i=0;i<array.length;i++){
    if(array[i]){
        truee.push(array[i])
    } 
}

console.log(truee)