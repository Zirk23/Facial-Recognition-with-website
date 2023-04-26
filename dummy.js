const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  console.log('Logged out!');
});