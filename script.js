document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');

  // Check if both the button and the navigation menu exist
  if (mobileMenuBtn && mainNav) {
    // Add a click event listener to the mobile menu button
    mobileMenuBtn.addEventListener('click', function() {
      // Toggle the 'show' class on the navigation menu
      mainNav.classList.toggle('show');
    });
  }
});