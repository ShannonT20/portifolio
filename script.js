// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-header, .about-content, .featured-project, .project-card, .contact-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
        // Submit form to Formspree
        const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('Sorry, there was an error sending your message. Please try again or contact me directly at shannonsikadi@gmail.com', 'error');
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add to document
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    });
}

// Add CSS for notifications
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .notification-close:hover {
        opacity: 0.8;
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Only run typing animation on first load
        if (!sessionStorage.getItem('animationPlayed')) {
            typeWriter(heroTitle, originalText.replace(/<[^>]*>/g, ''), 50);
            sessionStorage.setItem('animationPlayed', 'true');
        }
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill tags hover effect
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Project cards hover effect with enhanced interactions
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // Add cursor pointer style
        card.style.cursor = 'pointer';
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.15)';
            
            // Add subtle glow effect
            const cardImage = card.querySelector('.project-card-image');
            if (cardImage) {
                cardImage.style.transform = 'scale(1.05)';
                cardImage.style.filter = 'brightness(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.08)';
            
            const cardImage = card.querySelector('.project-card-image');
            if (cardImage) {
                cardImage.style.transform = 'scale(1)';
                cardImage.style.filter = 'brightness(1)';
            }
        });
        
        // Add click effect
        card.addEventListener('mousedown', () => {
            card.style.transform = 'translateY(-12px) scale(0.98)';
        });
        
        card.addEventListener('mouseup', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
        });
    });
});

// Smooth reveal animation for sections
const revealElements = document.querySelectorAll('.section-header, .about-content, .featured-project, .projects-grid, .contact-content');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.textContent);
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
});

// Project Modal Functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.querySelector('.modal-close');

    // Project data for modals
    const projectData = {
        'compliance': {
            title: 'Compliance Management System',
            description: 'Full-stack enterprise Compliance Management System designed to strengthen regulatory compliance, streamline verification workflows, and ensure data integrity across organizations. Built with TypeScript, FastAPI, PostgreSQL, and React. Developed at Minerva Risk Advisors.',
            tech: ['TypeScript', 'FastAPI', 'PostgreSQL'],
            link: null
        },
        'crop-disease': {
            title: 'Maize Plant Disease Detection Starter Notebook',
            description: 'AI for Crop Health - Diagnosing Maize Plant Diseases in Zimbabwe Using Deep Learning. Maize is the staple crop that sustains millions of Zimbabweans, underpinning both food security and livelihoods across rural and urban communities. Yet, Zimbabwe\'s maize production is persistently threatened by several devastating leaf diseases—primarily Common Rust, Gray Leaf Spot, and Blight—which cause significant yield reductions and economic losses. Developed deep learning models that accurately detect and classify maize diseases from leaf images. This solution provides farmers with real-time, accessible tools to identify diseases before they spread widely, enabling targeted interventions to minimize crop loss.',
            tech: ['Python', 'PyTorch', 'Computer Vision', 'CNN', 'Deep Learning'],
            link: 'https://github.com/ShannonT20/CROP-DISEASE-DETECTION-STARTER-NOTEBOOK'
        },
        'financial-inclusion': {
            title: 'Zindi Financial Inclusion in Africa',
            description: 'Primary competition - Can you predict who in Africa is most likely to have a bank account? Financial inclusion remains one of the main obstacles to economic and human development in Africa. Across Kenya, Rwanda, Tanzania, and Uganda only 9.1 million adults (or 14% of adults) have access to or use a commercial bank account. Created machine learning models to predict which individuals are most likely to have or use a bank account. The solution provides insights into the state of financial inclusion across East African countries and key factors driving individuals\' financial security.',
            tech: ['Python', 'Machine Learning', 'Data Science', 'Predictive Modeling', 'Classification'],
            link: 'https://github.com/ShannonT20/Financial-Inclusion'
        },
        'house-prediction': {
            title: 'House Price Prediction Model',
            description: 'Machine learning regression model for predicting house prices with feature engineering and data preprocessing.',
            tech: ['Python', 'Jupyter', 'Scikit-learn'],
            link: 'https://github.com/ShannonT20/House_Prediction_Modelling'
        },
        'insurance-prediction': {
            title: 'Insurance Prediction Challenge',
            description: 'Primary competition - A learning competition designed for DSN Bootcamp 2019. Recently, there has been an increase in the number of building collapse in Lagos and major cities in Nigeria. Olusola Insurance Company offers building insurance policies that protect against damages from fire, vandalism, flood, or storm. Built predictive models to determine if a building will have an insurance claim during the insured period.',
            tech: ['Python', 'Machine Learning', 'Classification', 'Risk Assessment', 'Predictive Modeling'],
            link: 'https://github.com/ShannonT20/first-project-Health-Insurance-Challange'
        },
        'soil-prediction': {
            title: 'Amini Soil Prediction Challenge',
            description: 'Primary competition - Can you predict nutrient gaps for a more fertile tomorrow? Soil health is fundamental to sustainable agriculture and food security. Key macronutrients (N, P, K) and micronutrients (Ca, Mg) determine soil fertility. This challenge focused on predicting nutrient gaps for maize crops to achieve target yields of 4 tons per hectare across African farms. Built machine learning models to predict availability of 11 essential soil nutrients and calculate gaps required for optimal maize production.',
            tech: ['Python', 'Machine Learning', 'Earth Observation', 'Agriculture', 'Predictive Modeling'],
            link: 'https://github.com/ShannonT20/SOIL-GAP-PREDICTION'
        },
        'loan-book': {
            title: 'Loan Book Calculation and Balance Tracker',
            description: 'Financial modeling program for comprehensive loan book analysis and balance tracking. This automated system takes loan book schedules as input, summarizes monthly data into yearly records, and calculates opening and closing balances for each year. Essential tool for financial institutions and loan portfolio management.',
            tech: ['Python', 'Financial Modeling', 'Data Analysis', 'Automation', 'Loan Portfolio'],
            link: 'https://github.com/ShannonT20/loan_book_computations'
        },
        'tax-calculation': {
            title: 'Tax Calculation and Balance Tracker',
            description: 'Automated tax schedule computation system for quarterly tax payments and balance tracking. This program processes tax schedules as input, calculates quarterly tax payments, and computes opening and closing balances for each period. Essential tool for tax compliance, financial planning, and balance sheet management.',
            tech: ['Python', 'Financial Analysis', 'Tax Compliance', 'Jupyter Notebook', 'Automation'],
            link: 'https://github.com/ShannonT20/tax_schedule_computations'
        },
        'simple-oop': {
            title: 'Simple OOP',
            description: 'Object-oriented programming concepts and implementations in Python.',
            tech: ['Python', 'OOP', 'Programming'],
            link: 'https://github.com/ShannonT20/simple-OOP'
        }
    };

    // Add click event listeners to project cards
    document.querySelectorAll('.project-card[data-project]').forEach(card => {
        card.addEventListener('click', (e) => {
            const projectKey = card.getAttribute('data-project');
            const project = projectData[projectKey];

            if (project) {
                // Populate modal content
                modalContent.innerHTML = `
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    ${project.link ? `
                        <div class="project-links">
                            <a href="${project.link}" target="_blank" class="project-link">
                                <i class="fab fa-github"></i> View on GitHub
                            </a>
                        </div>
                    ` : ''}
                `;

                // Show modal
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyles = `
    body:not(.loaded) {
        overflow: hidden;
    }

    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
    }
`;

const loadingStyleSheet = document.createElement('style');
loadingStyleSheet.textContent = loadingStyles;
document.head.appendChild(loadingStyleSheet);
