
const menuBtn = document.querySelector('.menu-btn');
const navItem = document.getElementById('nav-menu');
const descerConteudo = document.querySelector('main');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {

        // abrir hamburger-menu
        menuBtn.classList.add('open');
        menuOpen = true;

        // abrir nav
        navItem.style.display = 'block';
        descerConteudo.classList.add('desce');
    }

    else {

        //fechar hamburger menu
        menuBtn.classList.remove('open');

        //fechar nav
        navItem.style.display = 'none';
        descerConteudo.classList.remove('desce');
        menuOpen = false;
    }
});
