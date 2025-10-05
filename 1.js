// Navbar mobile toggle
window.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });
    }
});

// Animation: add .stat-inview when stat rectangle enters viewport
document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.hero-stat-rectangle');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('stat-inview');
                }
            });
        }, { threshold: 0.18 });
        stats.forEach(stat => observer.observe(stat));
    } else {
        // Fallback: show all if no IntersectionObserver
        stats.forEach(stat => stat.classList.add('stat-inview'));
    }
});