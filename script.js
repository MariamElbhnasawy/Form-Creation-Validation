document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = getInputValue('username');
        const email = getInputValue('email');
        const password = getInputValue('password');

        const messages = validateForm(username, email, password);
        displayFeedback(messages);
    });

    function getInputValue(id) {
        return document.getElementById(id).value.trim();
    }

    function validateForm(username, email, password) {
        let messages = [];

        if (username.length < 3) {
            messages.push("Username must be at least 3 characters long.");
        }

        if (!email.includes('@') || !email.includes('.')) {
            messages.push("Please enter a valid email address.");
        }

        if (password.length < 8) {
            messages.push("Password must be at least 8 characters long.");
        }

        return messages;
    }

    function displayFeedback(messages) {
        feedbackDiv.style.display = "block";

        if (messages.length === 0) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
        }
    }
});
