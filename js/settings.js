// Находим нужные элементы
const passwordEditIcon = document.querySelector('.password-edit');
const togglePasswordIcon = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const userDataContent = document.querySelector('.user-data__content');
const interestsItems = document.querySelectorAll('.interests-card');

// Обработка клика по иконке редактирования пароля
passwordEditIcon.addEventListener('click', function () {
    let confirmPasswordField = document.querySelector('.confirm-password');

    if (!passwordField.hasAttribute('disabled')) {
        passwordField.setAttribute('disabled', true);
        if (confirmPasswordField) {
            confirmPasswordField.style.maxHeight = '0';
            confirmPasswordField.style.opacity = '0';
            setTimeout(() => confirmPasswordField.remove(), 300);
        }
    } else {
        passwordField.removeAttribute('disabled');
        if (!confirmPasswordField) {
            confirmPasswordField = document.createElement('div');
            confirmPasswordField.className = 'user-data__password confirm-password';
            confirmPasswordField.innerHTML = `
                <img src="../images/password.svg" class="password-icon" alt="Password">
                <input type="password" id="confirmPassword" placeholder="Подтвердите пароль">
                <ion-icon id="toggleConfirmPassword" name="eye-outline" class="toggle-password"></ion-icon>
            `;
            userDataContent.appendChild(confirmPasswordField);
            setTimeout(() => {
                confirmPasswordField.style.maxHeight = '50px';
                confirmPasswordField.style.opacity = '1';
            }, 10);
        }
    }
});

function togglePasswordVisibility(inputField, iconElement) {
    const currentType = inputField.getAttribute('type');
    const newType = currentType === 'password' ? 'text' : 'password';
    inputField.setAttribute('type', newType);
    iconElement.setAttribute('name', newType === 'password' ? 'eye-outline' : 'eye-off-outline');
}

// Обработка клика по "глазу" для показа/скрытия пароля
togglePasswordIcon.addEventListener('click', () => {
    togglePasswordVisibility(passwordField, togglePasswordIcon);
});

// Обработка клика по "глазу" в поле подтверждения пароля
document.addEventListener('click', (event) => {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const confirmPasswordIcon = document.getElementById('toggleConfirmPassword');
    if (confirmPasswordInput && event.target === confirmPasswordIcon) {
        togglePasswordVisibility(confirmPasswordInput, confirmPasswordIcon);
    }
});

// Логика изменения класса при клике на interests-card
interestsItems.forEach((item) => {
    item.addEventListener('click', function () {
        item.classList.toggle('interests-card__active');
    });
});
