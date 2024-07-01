document.addEventListener('DOMContentLoaded', function() {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
      registerForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const name = document.getElementById('registerName').value;
          const email = document.getElementById('registerEmail').value;
          const password = document.getElementById('registerPassword').value;

          let users = JSON.parse(localStorage.getItem('users')) || [];
          const userExists = users.some(user => user.email === email);

          if (userExists) {
              alert('Usuário já registrado com este email.');
          } else {
              users.push({ name, email, password });
              localStorage.setItem('users', JSON.stringify(users));
              alert('Cadastro realizado com sucesso!');
              window.location.href = 'login.html';
          }
      });
  }
});
