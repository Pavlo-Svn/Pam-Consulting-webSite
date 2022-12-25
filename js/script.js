const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');


if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        menuBody.classList.toggle('active');
        menuIcon.classList.toggle('active')

    })
}
// =====================================================================================================
const mainSwiper = new Swiper('.main-block__swiper', {
    loop: true,
    speed: 1000,
    allowTouchMove: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',

});


const swiperAsked = new Swiper('.ask__swiper', {
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    autoHeight: true,
    spaceBetween: 40,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
            slidesPerGroup: 1,
        },
        620: {
            slidesPerView: 2,
            spaceBetween: 20,
            slidesPerGroup: 2,
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
        }
    }
});

swiper.mainSwiper();
swiper.swiperAsked();
// =====================================================================================================

const mapLink = document.querySelectorAll('.map-link');


mapLink.addEventListener('click', function(e){
    console.log(1)
})
document.getElementById('tr').addEventListener('click', function(e){
    console.log(1111)
});
