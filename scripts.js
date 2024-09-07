// Function to update the hero section content with a thank you message
function showThankYouMessage() {
    var heroContent = document.querySelector('#hero .hero-content');
    
    // Replace the existing content with a thank you message
    heroContent.innerHTML = `
        <div class="intro">
            <h2>Thank You for Your Interest!</h2> 
            <p>I appreciate you reaching out. For any inquiries or further information, feel free to email me at <a href="mailto:kanuriramakrishna18@gmail.com">kanuriramakrishna18@gmail.com</a>. I'll get back to you as soon as possible.</p>
        </div>
    `;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle home navigation to reset hero content
document.querySelector('a[href="#hero"]').addEventListener('click', function () {
    // Restore the original hero content
    document.querySelector('#hero .hero-content').innerHTML = `
        <div class="intro">
            <h2>HELLO!</h2>
            <h1>I Am Ramakrishna</h1>
            <p>As a dedicated Security Operations Center Analyst with a profound passion for technology and problem-solving, my career in cybersecurity is driven by a commitment to protecting digital environments and staying ahead of emerging threats. My expertise includes working with advanced tools like Microsoft Sentinel, Azure, and Splunk. Outside of work, I am an avid follower of anime, which fuels my creativity and strategic thinking. I continuously seek new tech trends and personal projects, balancing professional growth with a keen interest in innovative solutions and digital security.</p>
            <div class="buttons">
                <a href="#projects" class="btn">View Work</a>
                <a href="javascript:void(0);" class="btn secondary-btn" onclick="showThankYouMessage()">Hire Me</a>
            </div>
        </div>
    `;
});

// Toggle mobile menu
document.querySelector('.menu-btn').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');

    // Toggle menu button lines animation
    this.classList.toggle('active');
});

// Check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Animate blog cards when the blog section is in the viewport
function onScroll() {
    const blogSection = document.querySelector('#blog');
    const blogCards = document.querySelectorAll('.blog-cards .card');
    
    if (isElementInViewport(blogSection)) {
        blogCards.forEach(card => {
            card.classList.add('animate');
        });
    }
}

window.addEventListener('scroll', onScroll);
