window.addEventListener('scroll', function() {
    const navbar = document.getElementById('container');
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#003';
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.menu a');
  
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
        this.style.color = '#072';
      });
  
      link.addEventListener('mouseleave', function() {
        this.style.color = '#fff';
      });
    });
  });