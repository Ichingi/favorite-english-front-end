// const arrow = document.querySelector('.admin-panel__arrow');
// const adminPanel = document.querySelector('.admin-panel');
// const adminMain = document.querySelector('.admin-main');

// arrow.addEventListener('click', () => {
//     adminPanel.classList.toggle('active');
//     adminMain.classList.toggle('active');
// });


const arrow = document.querySelector('.admin-panel__arrow');
const adminPanel = document.querySelector('.admin-panel');
const adminMain = document.querySelector('.admin-main');

function checkScreenWidth() {
    if (window.innerWidth <= 973) {
        adminPanel.classList.remove('active');
        adminMain.classList.remove('active');
    }
    else {
        adminPanel.classList.add('active');
        adminMain.classList.add('active');
    }
}

checkScreenWidth();

arrow.addEventListener('click', () => {
    adminPanel.classList.toggle('active');
    adminMain.classList.toggle('active');
});

window.addEventListener('resize', checkScreenWidth);
