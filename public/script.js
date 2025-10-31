let currentSlide = 0;
const totalSlides = 3;

function moveCarousel(direction) {
    const items = document.querySelectorAll('.carousel-item');
    
    items[currentSlide].classList.remove('active');
    
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    items[currentSlide].classList.add('active');
    updateIndicators();
}

function goToSlide(index) {
    const items = document.querySelectorAll('.carousel-item');
    items[currentSlide].classList.remove('active');
    currentSlide = index;
    items[currentSlide].classList.add('active');
    updateIndicators();
}

function updateIndicators() {
    const indicatorsContainer = document.getElementById('carouselIndicators');
    if (!indicatorsContainer) return;
    
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('div');
        indicator.className = 'indicator' + (i === currentSlide ? ' active' : '');
        indicator.onclick = () => goToSlide(i);
        indicatorsContainer.appendChild(indicator);
    }
}

if (document.getElementById('carouselIndicators')) {
    updateIndicators();
}

setInterval(() => {
    if (document.querySelector('.carousel')) {
        moveCarousel(1);
    }
}, 5000);

document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.hotel-card, .feature-card, .booking-card, .profile-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    return re.test(phone);
}
