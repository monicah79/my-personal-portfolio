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

const featuredData = [
  {
    mobileImg: 'Images/tonic.svg',
    desktopImg: 'Images/snaps-portfolio.png',
    mobileTitle: ' Tonic',
    deskTitle: ' Tonic ',
    desc: `  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the
     releaLorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type and scrambled it 1960s with the 
     releorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn
      printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply 
      dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, 
    when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    tags: ['css', 'html', 'javaScript', 'githhub', 'Ruby', 'Bootstrap'],
  },
];

const displayFeaturedWork = (array) => {
  const featuredWorkString = array.map((feature) => `<div class="snap-tonic"><img  src=${feature.mobileImg} alt="Gymfit image"></div>
    <div class="snap-dskt"><img  src=${feature.desktopImg} alt="portfolio png"></div>
    <div class="sub-text-pop">
        <h2 class="sub-header">${feature.title}</h2>
        <p class="pop-desk-pr">
        ${feature.desc}
        </p>
        
        <ul class="sub-icons-pop">
            ${feature.languages.map((lang) => `<li class="sub-icons-pop"><a href="#">${lang}</a></li>`)
    .join('')}
        </ul>
        
        <div class="sub-btn-cont">
            <button class="sub-btn" >
                see project
            </button>
        </div>
    </div>`)
    .join('');
  featuredWork.innerHTML = featuredWorkString;
};

closeBtn.addEventListener('click', () => {
  myModal.classList.remove('show-modal');
  containers.forEach((container) => {
    container.classList.remove('blur');
  });
});


window.addEventListener('DOMContentLoaded', () => {
displayFeaturedWork(featuredData);
modalPopup();
});
