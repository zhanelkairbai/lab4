function showForm(formId) {

    const sections = document.querySelectorAll(".form-section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(formId).classList.add("active");
}


// БАЗОВЫЙ УРОВЕНЬ
document.getElementById("basicForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("basicName").value.trim();
    const email = document.getElementById("basicEmail").value.trim();
    const course = document.getElementById("basicCourse").value;
    const agree = document.getElementById("basicAgree").checked;
    const message = document.getElementById("basicMessage");

    if (name === "") {
        message.textContent = "Ошибка: введите ФИО.";
        return;
    }

    if (email === "") {
        message.textContent = "Ошибка: введите e-mail.";
        return;
    }

    if (course === "") {
        message.textContent = "Ошибка: выберите курс.";
        return;
    }

    if (!agree) {
        message.textContent = "Ошибка: необходимо согласиться с правилами.";
        return;
    }

    message.textContent = "Форма заполнена корректно!";
});


// СРЕДНИЙ УРОВЕНЬ
document.getElementById("mediumForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const login = document.getElementById("login").value.trim();
    const email = document.getElementById("mediumEmail").value.trim();
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeatPassword").value;
    const message = document.getElementById("mediumMessage");

    if (login === "") {
        message.textContent = "Ошибка: введите логин.";
        return;
    }

    if (email === "") {
        message.textContent = "Ошибка: введите e-mail.";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Ошибка: пароль должен содержать минимум 8 символов.";
        return;
    }

    if (password !== repeatPassword) {
        message.textContent = "Ошибка: пароли не совпадают.";
        return;
    }

    message.textContent = "Регистрация прошла успешно!";
});


// СЧЕТЧИК СИМВОЛОВ
document.getElementById("motivation").addEventListener("input", function() {

    const length = this.value.length;

    document.getElementById("counter").textContent =
        "Символов: " + length;
});


// ПОВЫШЕННЫЙ УРОВЕНЬ
document.getElementById("advancedForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("advancedName").value.trim();
    const email = document.getElementById("advancedEmail").value.trim();
    const course = document.getElementById("advancedCourse").value;
    const direction = document.getElementById("direction").value;
    const motivation = document.getElementById("motivation").value.trim();

    const skills = document.querySelectorAll(
        'input[name="skill"]:checked'
    );

    const message = document.getElementById("advancedMessage");

    if (name === "") {
        message.textContent = "Ошибка: введите ФИО.";
        return;
    }

    if (email === "") {
        message.textContent = "Ошибка: введите e-mail.";
        return;
    }

    if (course === "") {
        message.textContent = "Ошибка: выберите курс.";
        return;
    }

    if (direction === "") {
        message.textContent = "Ошибка: выберите направление.";
        return;
    }

    if (skills.length < 2) {
        message.textContent = "Ошибка: выберите минимум два навыка.";
        return;
    }

    if (motivation.length < 20) {
        message.textContent =
            "Ошибка: мотивационный текст должен содержать минимум 20 символов.";
        return;
    }

    message.textContent = "Заявка успешно заполнена!";
});
