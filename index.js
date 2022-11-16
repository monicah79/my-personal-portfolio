const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.link');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('show-links');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    nav.classList.remove('show-links');
  });
});
