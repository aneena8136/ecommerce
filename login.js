

// login 

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('login-email').value.trim();
    let password = document.getElementById('login-password').value.trim();

    if (validateEmail(email) && validatePassword(password)) {
        // Check if the user exists in local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful');
            // Redirect to index.html
            window.location.href = 'index1.html';
        } else {
            alert('Invalid login credentials');
        }
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('register-name').value.trim();
    let email = document.getElementById('register-email').value.trim();
    let password = document.getElementById('register-password').value.trim();
    let confirmPassword = document.getElementById('register-confirm-password').value.trim();

    if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('All fields are required');
        return;
    }

    if (!validateEmail(email)) {
        alert('Invalid email format');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    if (validatePassword(password)) {
        // Store the user in local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        let userExists = users.some(user => user.email === email);

        if (userExists) {
            alert('Email already registered');
        } else {
            users.push({ name: name, email: email, password: password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registration successful');
            // Redirect to login form
            toggleForm('login');
        }
    } else {
        alert('Password must be at least 6 characters long');
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

function toggleForm(formType) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');

    if (formType === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
        loginToggle.style.backgroundColor = '#088178';
        registerToggle.style.backgroundColor = '#ddd';
    } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
        registerToggle.style.backgroundColor = '#088178';
        loginToggle.style.backgroundColor = '#ddd';
    }
}

// Initialize the form toggle
toggleForm('login');


function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}



