const name = localStorage.getItem("name") || "Guest";

document.getElementById("welcomeText").innerHTML =
`Welcome, ${name}`;

document.getElementById("userName").innerHTML = name;

function logout(){

localStorage.removeItem("userLogin");
localStorage.removeItem("name");

window.location.href="login.html";

}

lottie.loadAnimation({

container:document.getElementById("lottie"),

renderer:"svg",

loop:true,

autoplay:true,

path:"https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json"

});