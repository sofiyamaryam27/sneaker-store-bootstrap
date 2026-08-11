function loginUser(event){

    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("email");
    let savedPassword = localStorage.getItem("password");

    const username = document.getElementById("username").value;

localStorage.setItem("name", username);
localStorage.setItem("userLogin","true");

window.location.href="dashboard.html";

    if(email === savedEmail && password === savedPassword){

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }else{

        document.getElementById("loginMessage").innerHTML =
        "Invalid Email or Password";
    }

}