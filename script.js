// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        }
    });
});

// Equipment filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const equipmentCards = document.querySelectorAll('.equipment-card');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.textContent.trim();
        
        // Show all cards if "ALL EQUIPMENT" is selected
        if (filterValue === 'ALL EQUIPMENT') {
            equipmentCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        // Filter cards based on category
        equipmentCards.forEach(card => {
            const cardTitle = card.querySelector('h3').textContent;
            // This is a simplified filter - in a real implementation, 
            // you would have data attributes for proper filtering
            if (cardTitle.toLowerCase().includes(filterValue.toLowerCase())) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .equipment-card, .portfolio-item, .why-us-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Initialize animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission handling (for contact forms)
const contactForms = document.querySelectorAll('form');
contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real implementation, you would handle form submission here
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Wrapest Films website loaded successfully');
    
    // Add any additional initialization code here
});