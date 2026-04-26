const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

<<<<<<< HEAD
        // Smooth scrolling
=======
        // Smooth scrolling ko lagi
>>>>>>> adced960eb308c3f8b5d3e1d2fec9bafd6859600
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    navLinks.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        });
     const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(e) {
   
    e.preventDefault(); 
    
    
    console.log("Form submitted successfully without refreshing!");
    
  
    alert("Dhanyawad for choosing us");
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
