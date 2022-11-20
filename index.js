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

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const span = document.querySelector('.span-btn');
function checkMail(mail) {
  if (mail.match(/^([a-z0-9.-]+)+@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', (e) => {
  if (!checkMail(email.value)) {
    e.preventDefault();
    span.innerText = 'please enter valid email address';
  } else {
    span.innerText = '';
  }
});
