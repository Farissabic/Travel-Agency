

AOS.init({
    duration:700,
    delay:50
});

const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('nav .container ul');
const close = document.getElementById('close');
const dark = document.getElementById('dark');
const light = document.getElementById('light');
const loginB = document.getElementById('logB');
const loginM = document.querySelector('nav .container .login')

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle('openClose');
    menuButton.style.display='none';
    close.style.display = 'block';
});

close.addEventListener('click', ()=>{
    menu.classList.remove('openClose');
    close.style.display = 'none';
    menuButton.style.display='block';
})


dark.addEventListener('click', ()=>{
    document.body.classList.toggle('darkTema');
    dark.style.display = 'none';
    light.style.display = 'block';
});


light.addEventListener('click', ()=>{
    document.body.classList.remove('darkTema');
    light.style.display = 'none';
    dark.style.display = 'block';
});

loginB.addEventListener('click', ()=>{
    loginM.classList.toggle('open');
})


const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween:30,
    autoplay:{
        delay:4000,
        disebleOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
});




