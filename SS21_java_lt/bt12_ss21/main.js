for(let i=1;i<=10;i++){
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log("%c Màu " + (i + 1) + " ", "background: " + randomColor + "; color: white; font-size: 16px; padding: 5px;");
}