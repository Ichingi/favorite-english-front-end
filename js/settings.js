// Находим нужные элементы
const passwordEditIcon = document.querySelector('.password-edit');
const togglePasswordIcon = document.getElementById('togglePassword');
const passwordField = document.getElementById('password');
const userDataContent = document.querySelector('.user-data__content');

// Обработка клика по иконке редактирования пароля
passwordEditIcon.addEventListener('click', function () {
    let confirmPasswordField = document.querySelector('.confirm-password');

    // Если поле уже существует (повторное нажатие)
    if (confirmPasswordField) {
        confirmPasswordField.style.maxHeight = '0'; // Скрываем поле с анимацией
        confirmPasswordField.style.opacity = '0'; // Плавное исчезновение
        setTimeout(() => {
            confirmPasswordField.remove(); // Удаляем элемент через таймер, чтобы завершилась анимация
        }, 300); // Время должно совпадать с CSS-анимацией
    } else {
        // Если поле еще не существует
        confirmPasswordField = document.createElement('div');
        confirmPasswordField.className = 'user-data__password confirm-password';

        confirmPasswordField.innerHTML = `
            <img src="../images/password.svg" class="password-icon" alt="Password">
            <input type="password" id="confirmPassword" placeholder="Подтвердите пароль">
        `;
        userDataContent.appendChild(confirmPasswordField);

        // Активация поля и анимация через небольшую задержку
        setTimeout(() => {
            confirmPasswordField.style.maxHeight = '200px';
            confirmPasswordField.style.opacity = '1';
        }, 10);
    }
});

// Обработка клика по "глазу" для показа/скрытия пароля
togglePasswordIcon.addEventListener('click', () => {
    // Переключаем тип поля
    const currentType = passwordField.getAttribute('type');
    const newType = currentType === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', newType);

    // Меняем иконку в зависимости от состояния
    togglePasswordIcon.setAttribute(
        'name',
        newType === 'password' ? 'eye-outline' : 'eye-off-outline'
    );
});

// Обработка клика по "глазу" для подтверждения пароля (если существует поле confirmPassword)
document.addEventListener('click', (event) => {
    const confirmPasswordInput = document.getElementById('confirmPassword');
    if (confirmPasswordInput && event.target === togglePasswordIcon) {
        // Логика для "глаза" подтверждения пароля
        const currentType = confirmPasswordInput.getAttribute('type');
        const newType = currentType === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', newType);
    }
});
