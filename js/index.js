const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider-track');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft; // Виправлено: використовуємо scrollLeft для відстеження положення скролу
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();

    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;

    slider.scrollLeft = scrollLeft - walk; // Виправлено: змінюємо scrollLeft для прокрутки
});

// Додамо підтримку сенсорних екранів

slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft; // Виправлено для сенсорів
});

slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;

    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = x - startX;

    slider.scrollLeft = scrollLeft - walk; // Виправлено для сенсорів
});

function toggleMenu() {
    const menu = document.querySelector('.nav__items');
    menu.classList.toggle('show');
}
