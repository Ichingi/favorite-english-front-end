function toggleMenu() {
    const menu = document.querySelector('.personal-burger');
    menu.classList.toggle('personal-burger__menu');
}

document.addEventListener('DOMContentLoaded', function () {
    const profile = document.querySelector('.profile');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    profile.addEventListener('click', function (event) {
        if (event.target.closest('.dropdown-menu')) {
            return;
        }
        profile.classList.toggle('open');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            profile.classList.remove('open');
        }
    });

    document.addEventListener('click', function (event) {
        if (!profile.contains(event.target)) {
            profile.classList.remove('open');
        }
    });
});

const burgerButton = document.querySelector('.personal-nav__burger-btn');
const burgerMenu = document.querySelector('.personal-nav__center');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
});