function darklight(){
   let body=document.getElementById("dlc")
   let text=document.getElementById("h1")
   let text1=document.getElementById("p")

   if(body.style.backgroundColor=="black"){
    body.style.backgroundColor="white"
    text.style.color="black"
    text1.style.color="black"
   }else{
    body.style.backgroundColor="black"
    text.style.color="white"
    text1.style.color="white"
   }
}