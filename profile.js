document.getElementById("userName").innerHTML =
localStorage.getItem("name");

document.getElementById("userEmail").innerHTML =
localStorage.getItem("email");

document.getElementById("fullName").innerHTML =
localStorage.getItem("name");

document.getElementById("email").innerHTML =
localStorage.getItem("email");

document.getElementById("mobile").innerHTML =
localStorage.getItem("mobile") || "Not Available";

function logout(){

localStorage.removeItem("userLogin");

window.location.href="login.html";

}