const navDrop = document.getElementById('nav_drop_cont');
const header = document.getElementById('header_wrap');
const fav = document.getElementById('favs');
const menu = document.getElementById('menu_bars');
const nav = document.getElementById('nav');
const main = document.getElementById('main');

var carousels = [
    {carousel: document.getElementById('c_1'), 
        lArrow: document.getElementById('left_arrow_1'),
        rArrow: document.getElementById('right_arrow_1'),
        cIndex: 0,
        sBar: document.getElementById('sb_1')},
    {carousel: document.getElementById('c_2'), 
        lArrow: document.getElementById('left_arrow_2'),
        rArrow: document.getElementById('right_arrow_2'),
        cIndex: 0,
        sBar: document.getElementById('sb_2')},
    {carousel: document.getElementById('c_3'), 
        lArrow: document.getElementById('left_arrow_3'),
        rArrow: document.getElementById('right_arrow_3'),
        cIndex: 0,
        sBar: document.getElementById('sb_3')},
    {carousel: document.getElementById('c_4'), 
        lArrow: document.getElementById('left_arrow_4'),
        rArrow: document.getElementById('right_arrow_4'),
        cIndex: 0,
        sBar: document.getElementById('sb_4')},
    {carousel: document.getElementById('c_5'), 
        lArrow: document.getElementById('left_arrow_5'),
        rArrow: document.getElementById('right_arrow_5'),
        cIndex: 0,
        sBar: document.getElementById('sb_5')}
]

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

function decrementIndex(item) {
    item.cIndex--;
    while (item.cIndex < 0) {
        item.cIndex += 6;
    }
}

function incrementIndex(item) {
    item.cIndex++;
    while (item.cIndex > 5) {
        item.cIndex -= 6;
    }
}

function rotateCarouselLeft(item) {
    item.lArrow.addEventListener('click', function() {
        decrementIndex(item);
        var angle = item.cIndex / 6 * -360;
        item.carousel.style.transform = 'rotateY(' + angle + 'deg)';
        var sbPct = (5 - item.cIndex)/5 * 100;
        item.sBar.style.backgroundPosition = sbPct + '% 0%';
    });
}

function rotateCarouselRight(item) {
    item.rArrow.addEventListener('click', function() {
        incrementIndex(item);
        var angle = item.cIndex / 6 * -360;
        item.carousel.style.transform = 'rotateY(' + angle + 'deg)';
        var sbPct = (5 - item.cIndex)/5 * 100;
        item.sBar.style.backgroundPosition = sbPct + '% 0%';
    });
}

carousels.forEach(rotateCarouselLeft);
carousels.forEach(rotateCarouselRight);

menu.addEventListener('click', menuToggle);
main.addEventListener('click', menuHide);
main.addEventListener("click", favHide);

var movieSetList = {
    line1: {
        carouselFace1: [
            {
                title: 'Movie 1',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 1,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 2',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 1,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 3',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 1,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 4',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 1,
                lineTitle: 'Line Title'
            }
        ],
        carouselFace2: [
            {
                title: 'Movie 5',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 2,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 6',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 2,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 7',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 2,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 8',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 2,
                lineTitle: 'Line Title'
            }
        ],
        carouselFace3: [
            {
                title: 'Movie 9',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 3,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 10',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 3,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 11',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 3,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 12',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 3,
                lineTitle: 'Line Title'
            }
        ],
        carouselFace4: [
            {
                title: 'Movie 13',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 4,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 14',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 4,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 15',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 4,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 16',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 4,
                lineTitle: 'Line Title'
            }
        ],
        carouselFace5: [
            {
                title: 'Movie 17',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 5,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 18',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 5,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 19',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 5,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 20',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 5,
                lineTitle: 'Line Title'
            }
        ],
        carouselFace6: [
            {
                title: 'Movie 21',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 6,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 22',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 6,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 23',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 6,
                lineTitle: 'Line Title'
            },
            {
                title: 'Movie 24',
                imgSrc: 'images/PH_344x215.jpg',
                description: 'Lorem ipsum setup explosion and with romance. Guy does good with one-liners and get victory from bad forces with robot tension.',
                subset: 'Line Title 1',
                carouselFace: 6,
                lineTitle: 'Line Title'
            }
        ]
    }
}

var app = new Vue({
    el: '#app',
    data: {
        movieLineTitles: [
            'Line Title',
            'Line Title 2'
        ],
        movieLine1: movieSetList.line1,
        carouselIndex1: 0,
        carouselStyle: {
            transform: 'rotateY(' + (this.carouselIndex1 / 6 * -360) + 'deg)'
        }
    },
    methods: {
        decrementIndex: function() {
            this.carouselIndex1--;
            while (this.carouselIndex1 < 0) {
                this.carouselIndex1 += 6;
            }
        },
        incrementIndex: function() {
            this.carouselIndex1++;
            while (this.carouselIndex1 > 5) {
                this.carouselIndex1 -= 6;
            }
        },
    },
    computed: {
        setAngle: function() {
            var angle = this.carouselIndex1 / 6 * -360;
            return angle;
        },
        setScrollPct: function() {
            var pct = (5 - this.carouselIndex1) / 5 * 100;
            return pct;
        }
    }
})
