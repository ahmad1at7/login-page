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


// document.addEventListener("DOMContentLoaded", function() {
//     // Login page
//     const loginButton = document.getElementById("loginButton");

//     loginButton.addEventListener("click", function() {
//         const email = document.getElementById("login_email").value.trim();
//         const password = document.getElementById("login_password").value.trim();

//         if (email === "" || password === "") {
//             // Use SweetAlert to show an alert
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'Please enter both email and password.'
//             });
//         } else {
//             // You can perform login authentication here
//             // For simplicity, let's assume the user is authenticated and redirect to the next page
//             window.location.href = "home.html";
//         }
//     });

//     // Registration page
//     const registerButton = document.getElementById("registerButton");

//     registerButton.addEventListener("click", function() {
//         const username = document.getElementById("user").value.trim();
//         const email = document.getElementById("register_email").value.trim();
//         const password = document.getElementById("register_password").value.trim();

//         if (username === "" || email === "" || password === "") {
//             // Use SweetAlert to show an alert
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'Please fill out all fields.'
//             });
//         } else {
//             // You can perform registration/authentication here
//             // For simplicity, let's assume the user is registered and redirect to the next page
//             window.location.href = "home.html";
//         }
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    // Function to show SweetAlert alert
    function showAlert(title, text, icon) {
        Swal.fire({
            icon: icon,
            title: title,
            text: text
        });
    }

    // Function to validate login form
    function validateLoginForm(email, password) {
        if (email === "" || password === "") {
            showAlert('Error', 'Please enter both email and password.', 'error');
            return false;
        }
        return true;
    }

    // Function to check if a user is registered
    function isUserRegistered(email, password) {
        // In a real application, you would retrieve user data from your database
        // For simplicity, let's use local storage to store user data
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (userData && userData.email === email && userData.password === password) {
            return true;
        }
        return false;
    }

    // Function to handle login
    function handleLogin(email, password) {
        if (isUserRegistered(email, password)) {
            // Perform login authentication here
            // For simplicity, let's assume the user is authenticated and redirect to the next page
            window.location.href = "home.html";
        } else {
            showAlert('Error', 'Invalid email or password. Please try again.', 'error');
        }
    }

    // Function to store user data
    function storeUserData(username, email, password) {
        // In a real application, you would typically send this data to your backend for storage
        // For simplicity, let's store it in local storage
        localStorage.setItem('userData', JSON.stringify({ username: username, email: email, password: password }));
        // showAlert('Success', 'You have been successfully registered!', 'success');
        // Redirect the user to the login page
        window.location.href = "home.html";
    }

    // Login page
    const loginButton = document.getElementById("loginButton");

    loginButton.addEventListener("click", function() {
        const email = document.getElementById("login_email").value.trim();
        const password = document.getElementById("login_password").value.trim();

        if (validateLoginForm(email, password)) {
            handleLogin(email, password);
        }
    });

    // Registration page
    const registerButton = document.getElementById("registerButton");

    registerButton.addEventListener("click", function() {
        const username = document.getElementById("user").value.trim();
        const email = document.getElementById("register_email").value.trim();
        const password = document.getElementById("register_password").value.trim();

        if (validateLoginForm(email, password)) {
            storeUserData(username, email, password);
        }
    });
});
