document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const subNav = document.querySelector('.sub-nav');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            subNav.classList.add('show');
        } else {
            navbar.classList.remove('scrolled');
            subNav.classList.remove('show');
        }
    });

    // Login/Logout functionality
    loginBtn.addEventListener('click', () => {
        loginBtn.classList.add('d-none');
        logoutBtn.classList.remove('d-none');
    });

    logoutBtn.addEventListener('click', () => {
        logoutBtn.classList.add('d-none');
        loginBtn.classList.remove('d-none');
    });

    // Initialize Swiper for course slider
    const courseSwiper = new Swiper('.course-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },
    });

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.card, .hero-content, h2');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});