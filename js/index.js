const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider-track');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = sliderTrack.offsetLeft;
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

    const sliderWidth = slider.offsetWidth;
    const trackWidth = sliderTrack.scrollWidth;

    let newTransform = scrollLeft + walk;
    const maxTransform = -(trackWidth - sliderWidth);

    if (newTransform > 0) {
        newTransform = 0;
    } else if (newTransform < maxTransform) {
        newTransform = maxTransform;
    }

    sliderTrack.style.transform = `translateX(${newTransform}px)`;
});

// Додамо підтримку сенсорних екранів

slider.addEventListener('touchstart', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = sliderTrack.offsetLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;

    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = x - startX;

    const sliderWidth = slider.offsetWidth;
    const trackWidth = sliderTrack.scrollWidth;

    let newTransform = scrollLeft + walk;
    const maxTransform = -(trackWidth - sliderWidth);

    if (newTransform > 0) {
        newTransform = 0;
    } else if (newTransform < maxTransform) {
        newTransform = maxTransform;
    }

    sliderTrack.style.transform = `translateX(${newTransform}px)`;
});

function toggleMenu() {
    const menu = document.querySelector('.nav__items');
    menu.classList.toggle('show');
}