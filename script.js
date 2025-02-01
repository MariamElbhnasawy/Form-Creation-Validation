document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = getInputValue('username');
        const email = getInputValue('email');
        const password = getInputValue('password');

        const validationResult = validateForm(username, email, password);
        displayFeedback(validationResult);
    });

    function getInputValue(id) {
        return document.getElementById(id).value.trim();
    }

    function validateForm(username, email, password) {
        let isValid = true;
        let messages = [];

        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        return { isValid, messages };
    }

    function displayFeedback(validationResult) {
        feedbackDiv.style.display = "block";

        if (validationResult.isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = validationResult.messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    }
});

