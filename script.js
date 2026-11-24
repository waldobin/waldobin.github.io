/**
 * Portfolio Interactions — Waldo Ha (waldobin)
 * Lightweight vanilla JavaScript: Theme management, mobile nav, scroll reveal, and active link tracking.
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Theme Management (prefers-color-scheme & manual override persistence)
  // ---------------------------------------------------------------------------
  const STORAGE_KEY = 'hoat_portfolio_theme';
  const htmlRoot = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // Check OS preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark';
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
  }

  // Initialize theme
  const currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = htmlRoot.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(activeTheme);
      try {
        localStorage.setItem(STORAGE_KEY, activeTheme);
      } catch (err) {
        // Handle private browsing or restricted storage gracefully
      }
    });
  }

  // Listen to system changes if user hasn't overridden
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // ---------------------------------------------------------------------------
  // 2. Mobile Navigation Toggle
  // ---------------------------------------------------------------------------
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');
  const navLinks = document.querySelectorAll('.nav-link');

  function closeMenu() {
    if (!siteNav || !menuToggle) return;
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
      if (
        siteNav.classList.contains('is-open') &&
        !siteNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    // Close on escape key
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  // Close menu upon nav link navigation
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // ---------------------------------------------------------------------------
  // 3. Subtle Scroll-Reveal Animation (Respects prefers-reduced-motion)
  // ---------------------------------------------------------------------------
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Immediately show all elements if reduced motion is requested or unsupported
    revealElements.forEach((el) => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // ---------------------------------------------------------------------------
  // 4. Active Navigation State on Scroll
  // ---------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '-72px 0px -40% 0px',
      }
    );

    sections.forEach((section) => navObserver.observe(section));
  }

  // ---------------------------------------------------------------------------
  // 5. Dynamic Footer Year
  // ---------------------------------------------------------------------------
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
})();
