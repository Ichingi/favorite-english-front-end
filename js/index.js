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

// Modal window
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');

    // Встановлюємо стартові значення для відкриття
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";  // Заблокувати скрол
    modalContent.style.animation = 'none'; // Скидаємо попередню анімацію
    modalContent.offsetHeight; // Перезапускаємо анімацію
    modalContent.style.animation = 'slideUp 0.5s ease'; // Додаємо анімацію відкриття заново
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    // Додаємо анімацію закриття
    modalContent.style.animation = 'slideOut 0.5s ease'; 
    
    // Після завершення анімації, приховуємо модальне вікно
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "";  // Розблокувати скрол
    }, 230); // Встановлюємо таймер на тривалість анімації
}

window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            closeModal(modal.id);
        }
    });
}

window.onkeydown = function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal'); // Закрити тільки відкрите модальне вікно
        modals.forEach(modal => {
            closeModal(modal.id);
        });
    }
};
