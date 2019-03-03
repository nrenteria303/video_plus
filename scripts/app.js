const navDrop = document.getElementById('nav_drop_cont');
const header = document.getElementById('header_wrap');
const fav = document.getElementById('favs');
const menu = document.getElementById('menu_bars');
const nav = document.getElementById('nav');
const main = document.getElementById('main');
const sb1 = document.getElementById('sb_1');
const sb2 = document.getElementById('sb_2');
const sb3 = document.getElementById('sb_3');
const sb4 = document.getElementById('sb_4');
const sb5 = document.getElementById('sb_5');
const leftArrow = document.getElementById('left_arrow_1');
const rightArrow = document.getElementById('right_arrow_1');
const leftArrow2 = document.getElementById('left_arrow_2');
const rightArrow2 = document.getElementById('right_arrow_2');
const leftArrow3 = document.getElementById('left_arrow_3');
const rightArrow3 = document.getElementById('right_arrow_3');
const leftArrow4 = document.getElementById('left_arrow_4');
const rightArrow4 = document.getElementById('right_arrow_4');
const leftArrow5 = document.getElementById('left_arrow_5');
const rightArrow5 = document.getElementById('right_arrow_5');
var carouselIndex = 0;
var carouselIndex2 = 0;
var carouselIndex3 = 0;
var carouselIndex4 = 0;
var carouselIndex5 = 0;
var car1 = document.getElementById('c_1');
var car2 = document.getElementById('c_2');
var car3 = document.getElementById('c_3');
var car4 = document.getElementById('c_4');
var car5 = document.getElementById('c_5');

function favShow() {
    navDrop.classList.remove('nav_drop_cont_hide');
}

function favHide() {
    navDrop.classList.add('nav_drop_cont_hide');
}

function menuHide() {
    nav.classList.remove('nav_show');
    if (!navDrop.classList.contains('nav_drop_cont_hide')) {
        navDrop.classList.add('nav_drop_cont_hide');
    }
}

function menuToggle() {
    if (nav.classList.contains('nav_show')) {
        nav.classList.remove('nav_show');
        if (!navDrop.classList.contains('nav_drop_cont_hide')) {
            navDrop.classList.add('nav_drop_cont_hide');
        }
    } else {
        nav.classList.add('nav_show');
    }
}

function rotateCarousel(car, cIndex, sb) {
    var angle = cIndex / 6 * -360;
    while (cIndex < 0) {
        cIndex += 6;
    }
    while (cIndex > 5) {
        cIndex -= 6;
    }
    var sbPct = (5 - cIndex)/5 * 100;
    car.style.transform = 'rotateY(' + angle + 'deg)';
    sb.style.backgroundPosition = sbPct + '% 0%';
}

menu.addEventListener('click', menuToggle);
main.addEventListener('click', menuHide);
main.addEventListener("click", favHide);

leftArrow.addEventListener('click', function() {
    carouselIndex--;
    rotateCarousel(car1, carouselIndex, sb1);
});

rightArrow.addEventListener('click', function() {
    carouselIndex++;
    rotateCarousel(car1, carouselIndex, sb1);
});

leftArrow2.addEventListener('click', function() {
    carouselIndex2--;
    rotateCarousel(car2, carouselIndex2, sb2);
});

rightArrow2.addEventListener('click', function() {
    carouselIndex2++;
    rotateCarousel(car2, carouselIndex2, sb2);
});

leftArrow3.addEventListener('click', function() {
    carouselIndex3--;
    rotateCarousel(car3, carouselIndex3, sb3);
});

rightArrow3.addEventListener('click', function() {
    carouselIndex3++;
    rotateCarousel(car3, carouselIndex3, sb3);
});

leftArrow4.addEventListener('click', function() {
    carouselIndex4--;
    rotateCarousel(car4, carouselIndex4, sb4);
});

rightArrow4.addEventListener('click', function() {
    carouselIndex4++;
    rotateCarousel(car4, carouselIndex4, sb4);
});

leftArrow5.addEventListener('click', function() {
    carouselIndex5--;
    rotateCarousel(car5, carouselIndex5, sb5);
});

rightArrow5.addEventListener('click', function() {
    carouselIndex5++;
    rotateCarousel(car5, carouselIndex5, sb5);
});