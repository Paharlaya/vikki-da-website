// Mobile Menu Toggle and Smooth Scrolling
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinkElements = document.querySelectorAll('.nav-link');
    navLinkElements.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.nav-container')) {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });

    // Smooth scroll for navigation links (only internal links)
    navLinkElements.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Only prevent default for internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
            // External links (like Asraya Homestay) will work normally
        });
    });

    // Simple navbar background on scroll (debounced)
    const navbar = document.getElementById('navbar');
    let scrollTimeout;

    if (navbar) {
        window.addEventListener('scroll', function() {
            // Clear previous timeout
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // Set new timeout to prevent excessive calls
            scrollTimeout = setTimeout(function() {
                const currentScroll = window.pageYOffset;

                if (currentScroll > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }, 10); // Small delay to prevent flickering
        });
    }
});

// WhatsApp Integration Functions

// General inquiry from main page
function openGeneralInquiry() {
    const phone = '919564827858';
    const message = 'Hello, I would like to know more about your tour packages.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Specific tour inquiry from itinerary pages
function openWhatsAppInquiry(code, name) {
    const phone = '919564827858';
    const message = `Interested in ${code} - ${name}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Handle WhatsApp button clicks on itinerary pages and card Book Now buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('whatsapp-btn') || e.target.classList.contains('card-book-btn')) {
        const code = e.target.getAttribute('data-code');
        const name = e.target.getAttribute('data-name');

        if (code && name) {
            openWhatsAppInquiry(code, name);
        }
    }
});

// Simple fade-in for cards on scroll (optional, non-intrusive)
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.tour-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        cardObserver.observe(card);
    });
});

// Back to top functionality (if needed)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mobile menu toggle (simple version)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Contact Card Functions

// Open WhatsApp Chat
function openWhatsAppChat() {
    const phone = '919564827858';
    const message = 'Hello, I would like to know more about your tour packages.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Make Phone Call
function makePhoneCall() {
    window.location.href = 'tel:+919564827858';
}

// Modal Functions
function openInquiryModal() {
    const modal = document.getElementById('inquiryModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeInquiryModal() {
    const modal = document.getElementById('inquiryModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    // Reset form
    document.getElementById('inquiryForm').reset();
}

// Submit Inquiry Form
function submitInquiry(event) {
    event.preventDefault();

    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Format message for WhatsApp
    const fullMessage = `Subject: ${subject}\n\nMessage: ${message}`;
    const phone = '919564827858';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;

    // Open WhatsApp
    window.open(url, '_blank');

    // Close modal
    closeInquiryModal();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('inquiryModal');
    if (event.target === modal) {
        closeInquiryModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeInquiryModal();
    }
});