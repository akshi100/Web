document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const paymentMessage = document.getElementById('payment-message');
    
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();

        if (name === '' || email === '' || phone === '') {
            alert('Please fill out all fields.');
            return;
        }

        // Simulate payment process
        registrationForm.style.opacity = '0.5';
        registrationForm.style.pointerEvents = 'none';
        
        paymentMessage.classList.remove('hidden');

        // In a real scenario, this would trigger an actual payment gateway
        // For this demo, we'll just show a success message and reset the form.
        setTimeout(() => {
            alert('Registration Successful! Check your email for the webinar link.');
            registrationForm.reset();
            registrationForm.style.opacity = '1';
            registrationForm.style.pointerEvents = 'auto';
            paymentMessage.classList.add('hidden');
        }, 2000);
    });
});