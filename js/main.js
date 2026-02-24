// ===========================
// HOLA PRIMA — Main JS
// ===========================

// --- PRELOADER ---
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }, 2200);
});

if (document.getElementById('preloader')) {
  document.body.style.overflow = 'hidden';
}

// --- MOBILE NAV ---
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navSocials = document.querySelector('.nav-socials');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
    navSocials?.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navLinks?.classList.contains('open')
      ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = navLinks?.classList.contains('open') ? '0' : '1';
    spans[2].style.transform = navLinks?.classList.contains('open')
      ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });
}

// --- ACTIVE NAV LINK ---
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const linkPath = link.getAttribute('href').split('/').pop();
  if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
    link.classList.add('active');
  }
});

// --- SCROLL REVEAL ---
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => revealObserver.observe(el));

// --- CONTACT FORM HANDLER ---
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = '../thank-you.html';
  });
}

// Fallback for pages where contact form is at root level
const contactFormRoot = document.getElementById('contact-form-root');
if (contactFormRoot) {
  contactFormRoot.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'thank-you.html';
  });
}

// --- SMOOTH MARQUEE PAUSE ON HOVER ---
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
  marqueeTrack.parentElement.addEventListener('mouseenter', () => {
    marqueeTrack.style.animationPlayState = 'paused';
  });
  marqueeTrack.parentElement.addEventListener('mouseleave', () => {
    marqueeTrack.style.animationPlayState = 'running';
  });
}
