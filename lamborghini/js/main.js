const swiper = new Swiper('.blog__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-right',
        prevEl: '.swiper-button-left',
    },
});
// const burger = document.querySelector('.burger');
// burger.addEventListener('click', ()=>{
//     console.log('click')
// })
const mobileMenu = function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelectorAll('.menu-list');
    burger.classList.toggle('active');
    for (let item of menu) {
        item.classList.toggle('active');
    }
}
