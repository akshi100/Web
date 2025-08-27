document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality for course modules
    const moduleItems = document.querySelectorAll('.module-item');

    moduleItems.forEach(item => {
        const header = item.querySelector('.module-header');
        header.addEventListener('click', () => {
            // Toggle the active class on the clicked item
            item.classList.toggle('active');

            // Optional: Close other open modules
            moduleItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Smooth scroll for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = ctaButton.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Form submission (simulated payment)
    const buyNowButton = document.querySelector('.final-cta .cta-button');
    if (buyNowButton) {
        buyNowButton.addEventListener('click', (e) => {
            e.preventDefault();

            // In a real scenario, this would redirect to a payment gateway
            alert('Redirecting to a secure payment gateway...');
            
            // For demonstration, just show a message
            console.log('User has initiated purchase.');
            
            // You could also redirect to a placeholder payment page here
            // window.location.href = 'https://your-payment-gateway-url.com';
        });
    }
});