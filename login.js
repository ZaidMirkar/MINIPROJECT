function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate email domain pattern
    const domainPattern = /^[a-zA-Z]+\.\d+\..+[a-zA-Z]+@mhssce\.ac\.in$/;
    if (!domainPattern.test(email)) {
        errorMessage.textContent = 'Please use a valid college email (name.rollno..branch@mhssce.ac.in).';
        return false;
    }

    // Add additional password validation logic here if needed

    // Simulate a loading effect
    const loginButton = document.querySelector('button');
    loginButton.textContent = 'Logging in...';
    loginButton.disabled = true;

    setTimeout(() => {
        loginButton.textContent = 'Login';
        loginButton.disabled = false;
        alert('Login successful!');
    }, 2000);

    return true;
}