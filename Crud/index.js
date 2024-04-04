const container =document.querySelector('.container');
const registerLink =document.querySelector('.register-link');
const loginLink =document.querySelector('.login-link');

registerLink.onclick=() =>{ 
    container.classList.add('active');
}

loginLink.onclick=() =>{ 
    container.classList.remove('active');
}


// //Sweet Error Message


document.addEventListener("DOMContentLoaded", function() {
    // Login page
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function() {
        const email = document.getElementById("login_email").value.trim();
        const password = document.getElementById("login_password").value.trim();

        if (email === "" || password === "") {
            // Use SweetAlert to show an alert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter both email and password.'
            });
        } else {
            // You can perform login authentication here
            // For simplicity, let's assume the user is authenticated and redirect to the next page
            window.location.href = "home.html";
        }
    });

    // Registration page
    const registerButton = document.getElementById("registerButton");

    registerButton.addEventListener("click", function() {
        const username = document.getElementById("user").value.trim();
        const email = document.getElementById("register_email").value.trim();
        const password = document.getElementById("register_password").value.trim();

        if (username === "" || email === "" || password === "") {
            // Use SweetAlert to show an alert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please fill out all fields.'
            });
        } else {
            // You can perform registration/authentication here
            // For simplicity, let's assume the user is registered and redirect to the next page
            window.location.href = "home.html";
        }
    });
});
