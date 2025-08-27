document.addEventListener('DOMContentLoaded', () => {
    // Add-to-Cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            
            // Simple user feedback
            button.textContent = 'Added!';
            button.style.backgroundColor = '#28a745'; // Green for added
            button.disabled = true;

            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.style.backgroundColor = '#333';
                button.disabled = false;
            }, 2000); // Reset button after 2 seconds

            // In a real application, you would do more here, like:
            // 1. Send an AJAX request to a server to add the item to a cart.
            // 2. Store the cart data in local storage.
            // 3. Update a shopping cart icon with the new item count.
        });
    });

    // Testimonial slider functionality
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    let currentIndex = 0;

    const updateSlider = () => {
        const slider = document.querySelector('.testimonial-slider');
        const testimonialWidth = testimonials[0].offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    });

    // Handle initial sizing and window resize
    window.addEventListener('resize', updateSlider);
    updateSlider();
});