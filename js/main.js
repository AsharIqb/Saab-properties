document.addEventListener('DOMContentLoaded', () => {
  
  // Header scroll effect
  const header = document.getElementById('site-header');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      // Optional: Add a class to body to prevent scrolling when menu is open
      document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });
  }

  // Close mobile menu when clicking outside or on a link
  document.addEventListener('click', (e) => {
    if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mainNav.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Search Tabs toggle
  const tabBtns = document.querySelectorAll('.tab-btn');
  
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all
      tabBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked
      btn.classList.add('active');
      
      // Update form action/placeholder based on tab if needed
      // const target = btn.getAttribute('data-target');
      // ...
    });
  });

  // Property Filters toggle
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Logic to filter properties would go here
    });
  });

});
