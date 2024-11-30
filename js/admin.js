const arrow = document.querySelector('.admin-panel__arrow');
const adminPanel = document.querySelector('.admin-panel');
const adminMain = document.querySelector('.admin-main');

adminMain.style.marginLeft = '310px';

arrow.addEventListener('click', () => {
    const isActive = adminPanel.classList.toggle('active');

    adminMain.style.marginLeft = isActive ? '310px' : '0';
});
