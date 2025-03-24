let n=8;
for(let i=n;i>0;i--){
    console.log("*".repeat(i));
}

for(let i=1;i<=n;i++){
    console.log("*".repeat(i));
}

for(let i=n;i>0;i--){
    console.log( " ".repeat(n-i)+ "*".repeat(i))
}

for(let i=1;i<=n;i++){
    console.log(" ".repeat(n-i)+  "*".repeat(i));
}