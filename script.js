// OMO Landing Page Script

document.addEventListener('DOMContentLoaded', function() {
    addNavbarScrollBehavior();
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function addNavbarScrollBehavior() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        navbar.style.transform = scrollTop <= 50 ? 'translateY(-100%)' : 'translateY(0)';
    });
}
