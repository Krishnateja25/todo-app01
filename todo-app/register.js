document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Basic validation (you can improve this)
    if (name && email && password) {
        // Simulate a successful registration
        document.getElementById("message").textContent = `Welcome, ${name}! You have successfully registered.`;

        // Clear the form fields
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("password").value = '';
    } else {
        // If any field is empty, show an error message
        document.getElementById("message").textContent = "Please fill in all fields.";
        document.getElementById("message").style.color = "red";
    }
});
