const navDrop = document.getElementById('nav_drop_cont');
const header = document.getElementById('header_wrap');
const fav = document.getElementById('favs');
const menu = document.getElementById('menu_bars');
const nav = document.getElementById('nav');

function favShow() {
    navDrop.classList.remove('nav_drop_cont_hide');
}

function favHide() {
    navDrop.classList.add('nav_drop_cont_hide');
}

function menuShow() {
    nav.classList.add('nav_show');
}

fav.addEventListener("mouseover", favShow);
navDrop.addEventListener("mouseleave", favHide);
menu.addEventListener('click', menuShow);