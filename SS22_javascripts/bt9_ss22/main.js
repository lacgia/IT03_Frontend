let arr=[3,3,3,3,3,6,7,8,6,9];

let checknum=[];

for(let i=0;i<arr.length;i++){
    let lac=true;
    for(let j=0;j<checknum.length;j++){
        if(arr[i]==checknum[j]){
            lac=false;
            break;
        }
    }if(lac){
        checknum.push(arr[i]);
    }
}
console.log("cac so xuat hien la: "+checknum);

for(let i=0;i<checknum.length-1;i++){
    for(let j=0;j<checknum.length-i-1;j++){
        if(checknum[j]>checknum[j+1]){
            let temp=checknum[i];
            checknum[j]=check[j+1];
            checknum[j+1]=temp;
        }
    }
}

console.log("sau khi sap xep lai la: "+checknum);


