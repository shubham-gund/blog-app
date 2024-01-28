document.addEventListener('DOMContentLoaded', function(){

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
  
    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].addEventListener('click', function() {
        searchBar.style.visibility = 'visible';
        searchBar.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        searchInput.focus();
      });
    }
  
    searchClose.addEventListener('click', function() {
      searchBar.style.visibility = 'hidden';
      searchBar.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    });


  });

  document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('loginForm').action = '/register';
    document.getElementById('loginForm').submit(); // Submit the form for registration
});

document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginForm').action = '/admin';
    document.getElementById('loginForm').submit(); // Submit the form for login
});