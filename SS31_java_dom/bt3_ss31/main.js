let blue=document.getElementById("blue")
let yellow=document.getElementById("yellow")
let red =document.getElementById("red")
let body=document.getElementById("body")

blue.addEventListener("mouseover", function(){
    body.style.backgroundColor="blue";
})

yellow.addEventListener("mouseover", function(){
    body.style.backgroundColor="yellow";
})

red.addEventListener("mouseover", function(){
    body.style.backgroundColor="red";
})

body.addEventListener('mouseout',function(){
    body.style.backgroundColor="white"
})