document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');

    // Trim input values only once
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    // Check for empty fields
    if (!name || !email || !phone || !message) {
        alert('All fields are required.');
        return;
    }

    // Validate email
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Disable the submit button to prevent multiple submissions
    submitButton.disabled = true;

    try {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwH7QHFRZ5NPWoJlqR_SDjOLJI2DNT8TCLEJnQ0Tp5lMEcOctO9NPX-BYfRHP1_fFZU/exec';
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        });

        if (response.ok) {
            alert('Form submitted successfully!');
            form.reset(); // Clear form fields
        } else {
            const errorText = await response.text();
            alert(`Submission failed: ${errorText}`);
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    } finally {
        // Re-enable the submit button after submission
        submitButton.disabled = false;
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
