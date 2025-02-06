function validateSignup() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate email domain pattern
    const domainPattern = /^[a-zA-Z]+\.\d+\..+[a-zA-Z]+@mhssce\.ac\.in$/;
    if (!domainPattern.test(email)) {
        errorMessage.textContent = 'Please use a valid college email (name.rollno..branch@mhssce.ac.in).';
        return false;
    }

    // Validate password match
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    // Simulate a loading effect
    const signupButton = document.querySelector('button');
    signupButton.textContent = 'Signing up...';
    signupButton.disabled = true;

    setTimeout(() => {
        signupButton.textContent = 'Sign Up';
        signupButton.disabled = false;
        alert('Signup successful!');
    }, 2000);

    return true;
}