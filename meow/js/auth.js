document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  if (!form) {
    console.warn("Форму #registration-form не знайдено");
    return;
  }

  const successEl = document.getElementById("auth-success");

  function setError(fieldName, message) {
    const errorEl = document.querySelector(
      `[data-error-for="${fieldName}"]`
    );
    if (errorEl) {
      errorEl.textContent = message || "";
    }
  }

  function clearErrors() {
    document
      .querySelectorAll(".auth-error")
      .forEach((el) => (el.textContent = ""));
    if (successEl) {
      successEl.hidden = true;
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    clearErrors();

    const fullName = form.fullName.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;

    let isValid = true;

    if (!fullName) {
      setError("fullName", "Введіть, будь ласка, ім’я та прізвище.");
      isValid = false;
    }

    if (!phone) {
      setError("phone", "Вкажіть номер телефону.");
      isValid = false;
    } else if (!/^\+?\d{10,15}$/.test(phone.replace(/\s/g, ""))) {
      setError("phone", "Перевірте формат номера телефону.");
      isValid = false;
    }

    if (!email) {
      setError("email", "Вкажіть email.");
      isValid = false;
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("email", "Невірний формат email.");
      isValid = false;
    }

    if (!password || password.length < 6) {
      setError("password", "Пароль має містити щонайменше 6 символів.");
      isValid = false;
    }

    if (password !== passwordConfirm) {
      setError("passwordConfirm", "Паролі не співпадають.");
      isValid = false;
    }

    if (!isValid) return;

    // зберігаємо дані користувача в localStorage
    const user = { fullName, phone, email };
    try {
      localStorage.setItem("meowbark_user", JSON.stringify(user));
    } catch (err) {
      console.warn("Не вдалося зберегти користувача:", err);
    }

    // паролі можна очистити, але ім’я/телефон/email лишаємо
    form.password.value = "";
    form.passwordConfirm.value = "";

    // показуємо повідомлення про успіх
    if (successEl) {
      successEl.textContent = "Дані збережено, дякуємо за реєстрацію! 💚";
      successEl.hidden = false;
    }
  });
});
