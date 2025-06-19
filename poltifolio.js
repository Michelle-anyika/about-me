// Toggle nav menu on mobile
const navToggle = document.getElementById('nav-toggle');
const navUl = document.querySelector('#navbar ul');

navToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Simple form validation and submit 
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Basic email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email.');
    return;
  }

  alert('Thank you for your message, ' + name + '!');

  form.reset();
});
// Back to Top functionality
const backToTopBtn = document.getElementById('backToTop');

// Show the button when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

// Smooth scrolling to top
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

