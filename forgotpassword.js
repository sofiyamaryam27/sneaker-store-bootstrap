function resetPassword(event){

event.preventDefault();

let email=document.getElementById("resetEmail").value;
let newPassword=document.getElementById("newPassword").value;

let savedEmail=localStorage.getItem("email");

if(email===savedEmail){

localStorage.setItem("password",newPassword);

document.getElementById("msg").innerHTML="✅ Password Updated Successfully";

setTimeout(function(){

window.location.href="login.html";

},1500);

}else{

document.getElementById("msg").innerHTML="❌ Email not found";

}

}