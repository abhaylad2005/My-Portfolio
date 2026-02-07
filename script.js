(function () {
  'use strict';

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const navAnchors = document.querySelectorAll('.nav-links a');

  // Mobile menu toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', navLinks.classList.contains('is-open'));
    });

    // Close menu when a link is clicked (for anchor links)
    navAnchors.forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }

  // Optional: highlight active section in nav (on scroll)
  const sections = document.querySelectorAll('section[id]');

  function setActiveLink() {
    const scrollY = window.scrollY;
    let current = '';

    sections.forEach(function (section) {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height && id) {
        current = id;
      }
    });

    navAnchors.forEach(function (a) {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        const id = href.slice(1);
        if (id === current) {
          a.setAttribute('aria-current', 'true');
        } else {
          a.removeAttribute('aria-current');
        }
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
})();
