document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

    // Initialize Typed.js for hero section
    new Typed('#typed', {
        strings: ['без кода', 'быстро', 'профессионально'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true,
        showCursor: false
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector('.dropdown');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            // DaisyUI handles the dropdown functionality
        });
    }

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('shadow-md');
        } else {
            header.classList.remove('shadow-md');
        }
    });

    // Initialize any additional components if needed
    console.log('Torexxx Creator landing page initialized');
});