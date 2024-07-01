document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const email = document.getElementById('loginEmail').value;
          const password = document.getElementById('loginPassword').value;

          let users = JSON.parse(localStorage.getItem('users')) || [];
          const user = users.find(user => user.email === email && user.password === password);

          if (user) {
              alert('Login realizado com sucesso!');
              window.location.href = 'dashboard.html';
          } else {
              alert('Email ou senha incorretos.');
          }
      });
  }
});