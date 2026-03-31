/**
 * NYMBLOC - Global Component Loader
 * Handles dynamic loading of header and footer across all pages.
 */

// Embedded Templates (Fallbacks for local file protocol)
const HEADER_CONTENT = `
<div class="container nav-container">
    <a href="index.html" class="logo">
        <img src="assets/logo-header.png" alt="NYMBLOC Logo" style="height: 60px; width: auto; max-width: 250px; object-fit: contain;">
    </a>
    <button class="mobile-menu-btn" aria-label="Toggle Menu">☰</button>
    <nav>
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="process.html">Process</a></li>
            <li><a href="why-us.html">Why Us</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html" class="btn btn-primary" style="padding: 8px 20px; color: white;">Contact</a></li>
        </ul>
    </nav>
</div>`;

const FOOTER_CONTENT = `
<div class="container">
    <div class="footer-grid">
        <div class="footer-col">
            <img src="assets/logo-footer.png" alt="NYMBLOC" class="footer-logo" style="height: 80px; width: auto; max-width: 300px; object-fit: contain; margin-bottom: 20px;">
            <p style="margin-bottom: 25px;">Building the digital future, one block at a time. We specialize in high-performance web applications and custom enterprise solutions.</p>
            <div class="social-links">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
                <a href="#">GitHub</a>
            </div>
        </div>
        <div class="footer-col">
            <h4>Company</h4>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="process.html">Our Process</a></li>
                <li><a href="why-us.html">Why Us</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Services</h4>
            <ul>
                <li><a href="services.html">SaaS Dev</a></li>
                <li><a href="services.html">React Apps</a></li>
                <li><a href="services.html">Laravel Backends</a></li>
                <li><a href="services.html">WordPress</a></li>
                <li><a href="services.html">UI/UX Design</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Contact Us</h4>
            <div class="footer-contact-item">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span>hello@nymbloc.com</span>
            </div>
            <div class="footer-contact-item">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+1 (555) 123-4567</span>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2026 NYMBLOC. All rights reserved.</p>
    </div>
</div>`;

document.addEventListener('DOMContentLoaded', () => {
    // Check if running on file:// protocol
    const isLocalFile = window.location.protocol === 'file:';

    // 1. Load Header
    const headerElement = document.querySelector('header');
    if (headerElement) {
        fetch('header.html')
            .then(response => {
                if (!response.ok) throw new Error('Header not found');
                return response.text();
            })
            .then(data => {
                headerElement.innerHTML = data;
                initializeMobileMenu();
                highlightActiveLink();
            })
            .catch(err => {
                console.warn('Using embedded header fallback.');
                headerElement.innerHTML = HEADER_CONTENT;
                initializeMobileMenu();
                highlightActiveLink();
            });
    }

    // 2. Load Footer
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Footer not found');
                return response.text();
            })
            .then(data => {
                footerElement.innerHTML = data;
            })
            .catch(err => {
                console.warn('Using embedded footer fallback.');
                footerElement.innerHTML = FOOTER_CONTENT;
            });
    }

    // 3. Initialize Scroll Progress
    const scrollProgress = document.createElement('div');
    scrollProgress.className = 'scroll-progress';
    document.body.appendChild(scrollProgress);

    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        scrollProgress.style.width = progress + '%';
        
        // Sticky Header Effect
        if (window.pageYOffset > 50) {
            headerElement?.classList.add('header-scrolled');
        } else {
            headerElement?.classList.remove('header-scrolled');
        }
    });

    // 4. Custom Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Scale cursor on links/buttons
        const target = e.target;
        const isHoverable = target.closest('a') || target.closest('button') || target.closest('.benefit-card') || target.closest('.portfolio-item');
        if (isHoverable) {
            cursor.style.transform = 'translate(-50%, -50%) scale(2.5)';
            cursor.style.backgroundColor = 'rgba(245, 158, 11, 0.4)';
        } else {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'var(--accent-orange)';
        }

        // Card Hover Proximity Effect
        const cards = document.querySelectorAll('.benefit-card, .service-card, .expertise-card, .culture-card, .stat-card, .benefit-item, .step-content');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', x + 'px');
            card.style.setProperty('--mouse-y', y + 'px');
        });
    });

    // 5. Initialize AOS Animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-quint'
        });
    }

    // 6. Initialize FAQ if on FAQ page
    initializeFAQ();
});

/**
 * FAQ Accordion Logic
 */
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                // Close other items (optional - uncomment for accordion effect)
                // faqItems.forEach(otherItem => {
                //     if (otherItem !== item) otherItem.classList.remove('active');
                // });
                
                item.classList.toggle('active');
            });
        }
    });
}

/**
 * Mobile Menu Logic (re-initialized after header load)
 */
function initializeMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.textContent = '☰';
            });
        });
    }
}

/**
 * Highlight the active page in the navbar
 */
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            // Don't change text color for the primary button to avoid invisibility
            if (!link.classList.contains('btn-primary')) {
                link.style.color = 'var(--accent-orange)';
            }
            link.style.fontWeight = '700';
            
            // Add a class for CSS-based highlighting if needed
            link.classList.add('active-link');
        }
    });
}


