document.getElementById('menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    const navMenu = document.querySelector('.Nav ul');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
  });

