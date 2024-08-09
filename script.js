
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

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Clear previous error messages
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('subjectError').textContent = '';
        document.getElementById('messageError').textContent = '';
    
        // Get form values
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let subject = document.getElementById('subject').value.trim();
        let message = document.getElementById('message').value.trim();
        let isValid = true;
    
        // Validation
        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            isValid = false;
        }
    
        if (email === '') {
            document.getElementById('emailError').textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('emailError').textContent = 'Invalid email format.';
            isValid = false;
        }
    
        if (subject === '') {
            document.getElementById('subjectError').textContent = 'Subject is required.';
            isValid = false;
        }
    
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message is required.';
            isValid = false;
        }
    
        // Success handling
        if (isValid) {
            alert('Form submitted successfully.');
    
            // Clear the form fields
            document.getElementById('contactForm').reset();
    
            // Alternatively, you can manually clear the fields if needed
            // document.getElementById('name').value = '';
            // document.getElementById('email').value = '';
            // document.getElementById('subject').value = '';
            // document.getElementById('message').value = '';
        }
    });
    
    // Email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(email);
    }
    
    
})();
