const darkModeToggle = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('icon');

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
} else {
  body.classList.remove('dark-mode');
}