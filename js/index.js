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

    // Получаем ширину слайдера и ширину дорожки
    const sliderWidth = slider.offsetWidth;
    const trackWidth = sliderTrack.scrollWidth;

    // Ограничиваем прокрутку
    let newTransform = scrollLeft + walk;
    const maxTransform = -(trackWidth - sliderWidth); // Максимально допустимое смещение влево

    // Проверяем границы
    if (newTransform > 0) {
        newTransform = 0; // Не даем выйти за начало
    } else if (newTransform < maxTransform) {
        newTransform = maxTransform; // Не даем выйти за конец
    }

    sliderTrack.style.transform = `translateX(${newTransform}px)`;
});

