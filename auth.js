// auth.js

document.getElementById('login-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simulate an API login call
    if (email === 'test@test.com' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      window.location.href = 'index.html';
    } else {
      document.getElementById('message').textContent = 'Invalid email or password.';
    }
  });
  
  document.getElementById('signup-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simulate an API signup call
    localStorage.setItem('user', JSON.stringify({ name, email }));
    window.location.href = 'login.html';
  });
  