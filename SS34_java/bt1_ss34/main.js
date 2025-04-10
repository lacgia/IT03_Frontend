
const users=[

]


let email_Notification=document.getElementById("emailCheck")
let pass_Notìication=document.getElementById("passCheck")
function check() {
    let email = document.getElementById("input-Email").value.trim();
    let inputPass = document.getElementById("input-Password").value.trim();
    let confirmpass = document.getElementById("confirm-Password").value.trim();


    let harErorr=true;

   if(!email || !email.includes("@")){
    email_Notification.classList.remove("d-none");
    email_Notification.textContent="cannot be left blank and have @"
    harErorr=false
   }

   if(!inputPass){
   pass_Notìication.classList.remove("d-none")
   pass_Notìication.textContent="cannot be left blank"
   harErorr=false
   }
   
   if(inputPass!==confirmpass){
    pass_Notìication.textContent="Password Error"
    pass_Notìication.classList.remove("d-none")
    harErorr=false
   }


   //kiem tra trung lap email
   const isExist=users.some(user => user.email==email);
   console.log(isExist); 
   if(isExist){
   email_Notification.textContent="duplicate emails"
   email_Notification.classList.remove("d-none");
   harErorr=false
   
   }
   if(!harErorr){
    return;
   }

   const newUser={email:email, password:inputPass};
   users.push(newUser);
   localStorage.setItem("users", JSON.stringify(users));



}

localStorage.clear();