// Dark Mode Toggle for All Pages
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

// Load and Apply Dark Mode Preference from Local Storage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Light Mode';
}

// Toggle Dark Mode and Save Preference
darkModeToggle.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Testimonial Slider Logic
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Show First Testimonial Initially
showTestimonial(currentTestimonial);

// Rotate Testimonials Every 5 Seconds
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);

// Scroll to Services Section Smoothly
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
});

// Form Validation and Submission Handling for Subscription
document.getElementById('subscribeForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default submission

    const email = document.getElementById('email').value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Thanks for subscribing!');
        e.target.reset(); // Clear input after submission
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
