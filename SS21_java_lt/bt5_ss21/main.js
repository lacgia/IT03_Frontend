let count=0;
let next="";
for(let i=0;i<=100;i++){
    if(i%3==0 && i%5==0){
        next+=" fizzbuzz "
        continue;
    }

   if(i%3==0){
    next+=" Fizz ";
    continue;
   }

   if(i%5==0){
    next+=" buzz "
    continue;
   }

   next+=" "+i+" "

}
alert("mang 100 so nguyen la : "+next)