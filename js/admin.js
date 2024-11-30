const arrow = document.querySelector('.admin-panel__arrow');
const adminPanel = document.querySelector('.admin-panel');

arrow.addEventListener('click', () => {
    adminPanel.classList.toggle('active');    
});
