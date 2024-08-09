// Encapsulate all code to avoid global conflicts
(function() {

    // Toggle the mobile navbar
    document.getElementById('bar').addEventListener('click', function(event) {
        event.preventDefault();
        var navbar = document.getElementById('mobile-navbar');
        console.log('Bar button clicked');
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            console.log('Navbar class removed');
        } else {
            navbar.classList.add('active');
            console.log('Navbar class added');
        }
    });

    // Form validation logic
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let subject = document.getElementById('subject').value.trim();
        let message = document.getElementById('message').value.trim();
        let isValid = true;

        if (name === '') {
            alert('Name is required.');
            isValid = false;
        }

        if (email === '') {
            alert('Email is required.');
            isValid = false;
        } else if (!validateEmail(email)) {
            alert('Invalid email format.');
            isValid = false;
        }

        if (subject === '') {
            alert('Subject is required.');
            isValid = false;
        }

        if (message === '') {
            alert('Message is required.');
            isValid = false;
        }

        if (isValid) {
            alert('Form submitted successfully.');
            // Uncomment the following line to actually submit the form:
            // this.submit();
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }

})();
