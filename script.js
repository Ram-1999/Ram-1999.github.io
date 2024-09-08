// Function to show the modal
function showModal() {
    document.body.style.overflow = 'hidden';  // Disable background scroll
    document.getElementById('contact-modal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.body.style.overflow = '';  // Re-enable background scroll
    document.getElementById('contact-modal').style.display = 'none';
}

// Event listener for the "Hire Me" button
document.querySelector('.hire-me').addEventListener('click', showModal);

// Close the modal when the "Escape" key is pressed
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    // Toggle active class to open/close the menu
    navLinks.classList.toggle('active');
    
    // Toggle the animation for the hamburger menu
    hamburger.classList.toggle('active');
}

// Function to highlight the current section in view
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const offset = window.innerHeight / 3; // Adjust this value if needed

    let index = sections.length;

    while (--index && window.scrollY + offset < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

// Debounce function to limit how often a function can fire
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Smooth scrolling behavior with adjustment for fixed header
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Adjust scroll position to account for fixed header
        const headerHeight = document.querySelector('nav').offsetHeight; 
        const targetOffset = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });

        // Update active class after scrolling
        setTimeout(() => {
            highlightCurrentSection();
        }, 500); // Adjust timeout to match scroll duration

        // Close the menu if on mobile
        const navLinks = document.getElementById('nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Listen for scroll events to highlight the current section, with debouncing
window.addEventListener('scroll', debounce(highlightCurrentSection));

// Close the navigation menu on clicking any link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        const navLinks = document.getElementById('nav-links');
        const hamburger = document.querySelector('.hamburger');
        
        // Close the menu by removing the active class
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Ensure correct section highlight on page load or refresh
document.addEventListener('DOMContentLoaded', function () {
    highlightCurrentSection(); // Call once to ensure correct highlight
    const cards = document.querySelectorAll('.card');

    function handleAnimation(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }

    const observerOptions = {
        root: null,  // viewport
        rootMargin: '0px',
        threshold: 0.1  // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver(handleAnimation, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});

// Update highlight function for mobile view
function updateMobileHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const offset = window.innerHeight / 3;

    let index = sections.length;

    while (--index && window.scrollY + offset < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    if (navLinks[index]) {
        navLinks[index].classList.add('active');
    }
}

// Listen for scroll events to highlight the current section, with debouncing
window.addEventListener('scroll', debounce(updateMobileHighlight));
