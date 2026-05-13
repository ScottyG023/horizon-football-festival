// Mobile menu toggle + active nav link highlighting on scroll.

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight nav link for the section currently in view (home page only).
  const sections = document.querySelectorAll('section[id]');
  if (sections.length) {
    const navLinks = document.querySelectorAll('header nav a[href^="#"]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((a) => {
            a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach((s) => observer.observe(s));
  }
});
