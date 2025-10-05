// Hide hexagon-hint when click anywhere on hexagon-inner (image, box, or hint)
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hexagon-inner').forEach(hex => {
        hex.addEventListener('click', function() {
            const hint = this.querySelector('.hexagon-hint');
            if (hint) hint.style.display = 'none';
        });
    });
});
// Timeline: slide-in/fade effect when entering viewport
function setupTimelineObserver() {
    const cards = document.querySelectorAll('.timeline-content');
    const observer = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.15 });
    cards.forEach(card => {
        observer.observe(card);
    });
}
window.addEventListener('DOMContentLoaded', setupTimelineObserver);
// Timeline scroll animation: cards move vertically as you scroll
function animateTimelineOnScroll() {
    const cards = document.querySelectorAll('.timeline-content');
    const center = window.innerHeight / 2;
    const max = window.innerHeight / 1.6; // how far before max effect
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const v = (cardCenter - center) / max;
        const translateY = Math.max(-1, Math.min(1, v)) * 24; // px, adjust for effect
        card.style.transform = `translateY(${translateY}px)`;
    });
}

window.addEventListener('scroll', animateTimelineOnScroll);
window.addEventListener('resize', animateTimelineOnScroll);
window.addEventListener('DOMContentLoaded', animateTimelineOnScroll);
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                // Nếu là Trang chủ thì scroll lên đầu trang
                if (targetId === '#Main' || targetId === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }
                // Skip if href is just "#"
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
        function createQuantumParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = Math.random() * 4 + 1 + 'px';
            particle.style.height = particle.style.width;
            particle.style.background = ['#00ffff', '#ff0080', '#ffbb00ff'][Math.floor(Math.random() * 3)];
            particle.style.borderRadius = '50%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100vh';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '-1';
            particle.style.boxShadow = `0 0 10px ${particle.style.background}`;
            
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            const drift = (Math.random() - 0.5) * 200;
            
            particle.animate([
                { transform: 'translateY(0px) translateX(0px)', opacity: 0 },
                { transform: `translateY(-100vh) translateX(${drift}px)`, opacity: 1 }
            ], {
                duration: duration,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        // Slide-in/out animation for feature-content.glass
        let lastScrollY = window.pageYOffset;
        const featureContents = document.querySelectorAll('.feature-content.glass');
        const featureVisuals = document.querySelectorAll('.feature-visual.glass');
        featureContents.forEach(el => {
            el.classList.remove('slide-in', 'slide-out');
        });
        featureVisuals.forEach(el => {
            el.classList.remove('slide-in', 'slide-out');
        });

        function handleFeatureAnimation() {
            const currentScrollY = window.pageYOffset;
            const directionDown = currentScrollY > lastScrollY;
            featureContents.forEach((el, idx) => {
                const rect = el.getBoundingClientRect();
                const visual = featureVisuals[idx];
                // Nếu phần tử xuất hiện trong viewport thì slide-in
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('slide-in');
                    el.classList.remove('slide-out');
                    if (visual) {
                        visual.classList.add('slide-in');
                        visual.classList.remove('slide-out');
                    }
                } else {
                    // Nếu rời khỏi viewport (cả phía trên lẫn dưới) thì reset về trạng thái ban đầu
                    el.classList.remove('slide-in', 'slide-out');
                    el.style.opacity = '';
                    el.style.transform = '';
                    if (visual) {
                        visual.classList.remove('slide-in', 'slide-out');
                        visual.style.opacity = '';
                        visual.style.transform = '';
                    }
                }
            });
            lastScrollY = currentScrollY;
        }
        window.addEventListener('scroll', handleFeatureAnimation);
        window.addEventListener('load', handleFeatureAnimation);

        // Intersection Observer for timeline and hexagons (giữ nguyên)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Click-to-toggle hexagon details (show paragraph under h4)
        // Also add keyboard support (Enter/Space) and ensure only one item is open at a time.
        const hexInners = document.querySelectorAll('.hexagon-inner');
        hexInners.forEach(inner => {
            if (!inner) return;
            // make focusable for keyboard users and expose role
            inner.setAttribute('tabindex', '0');
            inner.setAttribute('role', 'button');
            inner.setAttribute('aria-expanded', 'false');

            const toggle = (e) => {
                const currentlyExpanded = inner.classList.contains('expanded');
                if (!currentlyExpanded) {
                    // close any other expanded items
                    document.querySelectorAll('.hexagon-inner.expanded').forEach(other => {
                        if (other !== inner) {
                            other.classList.remove('expanded');
                            other.setAttribute('aria-expanded', 'false');
                        }
                    });
                }
                const isExpanded = inner.classList.toggle('expanded');
                inner.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            };

            // Toggle when clicking the outer .hexagon (so clicks on edges also work)
            const hex = inner.closest('.hexagon');
            if (hex) {
                hex.addEventListener('click', (ev) => {
                    toggle(ev);
                });
            }

            // Keyboard: Enter or Space toggles
            inner.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter' || ev.key === ' ' || ev.key === 'Spacebar') {
                    ev.preventDefault();
                    toggle(ev);
                }
            });

            // Also toggle when clicking the image directly; prevent bubbling to avoid double toggle
            const img = inner.querySelector('.hexagon-icon');
            if (img) {
                img.addEventListener('click', (ev) => {
                    ev.stopPropagation();
                    toggle(ev);
                });
            }
        });

        // Form submission effect
        document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            this.innerHTML = 'TRANSMITTING...';
            this.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
            
            setTimeout(() => {
                this.innerHTML = 'TRANSMISSION COMPLETE';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                
                setTimeout(() => {
                    this.innerHTML = 'TRANSMIT TO MATRIX';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
                }, 2000);
            }, 1500);
        });