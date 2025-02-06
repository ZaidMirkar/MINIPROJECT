function validateUpload() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const fileInput = document.getElementById('pdf-file');
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Validate email domain pattern
    const domainPattern = /^[a-zA-Z]+\.\d+\..+[a-zA-Z]+@mhssce\.ac\.in$/;
    if (!domainPattern.test(email)) {
        errorMessage.textContent = 'Please use a valid college email (name.rollno..branch@mhssce.ac.in).';
        return false;
    }

    // Validate file type
    const file = fileInput.files[0];
    if (file && file.type !== 'application/pdf') {
        errorMessage.textContent = 'Please upload a valid PDF file.';
        return false;
    }

    // Simulate a loading effect
    const uploadButton = document.querySelector('button');
    uploadButton.textContent = 'Uploading...';
    uploadButton.disabled = true;

    setTimeout(() => {
        uploadButton.textContent = 'Upload and Print';
        uploadButton.disabled = false;
        alert('File uploaded successfully! Your document is now in the printing queue.');
    }, 2000);

    return true;
}