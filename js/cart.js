function ensureCartLoaded() {
  if (!Array.isArray(window.cart)) {
    if (typeof loadCart === "function") {
      window.cart = loadCart();
    } else {
      window.cart = [];
    }
  }
}

// Порахувати загальну суму
function getCartTotal() {
  return window.cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );
}
// Рендер повного кошика на сторінці cart.html
function renderFullCart() {
  const listEl = document.getElementById("cart-items");
  const countEl = document.getElementById("summary-count");
  const totalEl = document.getElementById("summary-total");
  if (!listEl || !countEl || !totalEl) return;
  listEl.innerHTML = "";
  if (!window.cart || window.cart.length === 0) {
    listEl.innerHTML = `<p>Ваш кошик порожній 🙂</p>`;
    countEl.textContent = "0";
    totalEl.textContent = "0.00 грн";
    return;
  }
  const totalCount = window.cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  window.cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    const imageSrc = item.image || ""; 
    row.innerHTML = `
      <div class="cart-item-left">
        <div class="cart-thumb">
          ${
            imageSrc
              ? `<img src="${imageSrc}" alt="${item.name}">`
              : `<div class="cart-thumb-placeholder"></div>`
          }
        </div>
        <div class="cart-info">
          <p class="cart-name">${item.name}</p>
          <p class="cart-price">${item.price} грн</p>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="quantity-box">
          <button class="qty-btn" data-minus="${item.id}">−</button>
          <span class="qty-number">${item.quantity || 1}</span>
          <button class="qty-btn" data-plus="${item.id}">+</button>
          <button class="remove-btn" data-remove="${item.id}" aria-label="Видалити товар">
            <!-- svg-іконка кошика -->
            <svg viewBox="0 0 24 24" class="remove-icon" aria-hidden="true">
              <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6v9H8V9h2zm4 0v9h-2V9h2zm3-2v12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7h10z"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    listEl.appendChild(row);
  });
  countEl.textContent = String(totalCount);
  totalEl.textContent = getCartTotal().toFixed(2) + " грн";
}

// Оновити все, що пов’язане з кошиком (повна сторінка + мінікошик + лічильник)
function refreshCartUI() {
  if (typeof saveCart === "function") {
    saveCart(window.cart);
  } else {
    // fallback: прямий localStorage, якщо раптом немає saveCart
    localStorage.setItem("cartItems", JSON.stringify(window.cart));
  }

  // лічильник у хедері
  if (typeof updateCartCountUI === "function") {
    updateCartCountUI();
  }

  // мінікошик
  if (typeof renderMiniCart === "function") {
    renderMiniCart();
  }

  // повний кошик на цій сторінці
  renderFullCart();
}

// Обробка кліків: плюс / мінус / видалити
document.addEventListener("click", (event) => {
  const plusBtn = event.target.closest("[data-plus]");
  const minusBtn = event.target.closest("[data-minus]");
  const removeBtn = event.target.closest("[data-remove]");

  if (!plusBtn && !minusBtn && !removeBtn) return;

  ensureCartLoaded();

  // +
  if (plusBtn) {
    const id = plusBtn.dataset.plus;
    const item = window.cart.find((i) => i.id === id);
    if (item) {
      item.quantity = (item.quantity || 1) + 1;
      refreshCartUI();
    }
  }

  // -
  if (minusBtn) {
    const id = minusBtn.dataset.minus;
    const item = window.cart.find((i) => i.id === id);
    if (item) {
      const newQty = (item.quantity || 1) - 1;
      if (newQty <= 0) {
        window.cart = window.cart.filter((i) => i.id !== id);
      } else {
        item.quantity = newQty;
      }
      refreshCartUI();
    }
  }

  // Видалити
  if (removeBtn) {
    const id = removeBtn.dataset.remove;
    window.cart = window.cart.filter((i) => i.id !== id);
    refreshCartUI();
  }
});

// Ініціалізація на завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  ensureCartLoaded();
  renderFullCart();

  if (typeof updateCartCountUI === "function") {
    updateCartCountUI();
  }
  if (typeof renderMiniCart === "function") {
    renderMiniCart();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const checkoutBtn = document.getElementById("cart-checkout-btn");
  const checkoutForm = document.getElementById("checkout-form");
  const checkoutSuccess = document.getElementById("checkout-success");

  if (!checkoutBtn || !checkoutForm) return;

  // при натисканні "Оформити замовлення" показуємо форму
  checkoutBtn.addEventListener("click", () => {
    ensureCartLoaded();
    if (!window.cart || !window.cart.length) {
      alert("Ваш кошик порожній 🐾");
      return;
    }

    // показати форму
    checkoutForm.hidden = false;
    if (checkoutSuccess) checkoutSuccess.hidden = true;

    // спробуємо підставити дані користувача з localStorage
    try {
      const rawUser = localStorage.getItem("meowbark_user");
      if (rawUser) {
        const user = JSON.parse(rawUser);
        if (user.fullName && checkoutForm.name) {
          checkoutForm.name.value = user.fullName;
        }
        if (user.phone && checkoutForm.phone) {
          checkoutForm.phone.value = user.phone;
        }
        if (user.email && checkoutForm.email) {
          checkoutForm.email.value = user.email;
        }
      }
    } catch (e) {
      console.warn("Не вдалося підставити дані користувача", e);
    }

    checkoutForm.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // сабміт форми
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();
    ensureCartLoaded();

    if (!window.cart || !window.cart.length) {
      alert("Кошик порожній, додайте товари перед оформленням.");
      return;
    }

    const name = checkoutForm.name.value.trim();
    const phone = checkoutForm.phone.value.trim();
    const email = checkoutForm.email.value.trim();
    const city = checkoutForm.city.value.trim();
    const address = checkoutForm.address.value.trim();

    if (!name || !phone || !email || !city || !address) {
      alert("Будь ласка, заповніть усі обов’язкові поля.");
      return;
    }

    window.cart = [];
    if (typeof saveCart === "function") {
      saveCart(window.cart);
    }

    if (typeof refreshCartUI === "function") {
      refreshCartUI();
    }

    if (typeof updateCartCountUI === "function") {
      updateCartCountUI();
    }
    if (typeof renderMiniCart === "function") {
      renderMiniCart();
    }

    checkoutForm.reset();
    if (checkoutSuccess) checkoutSuccess.hidden = false;
  });
});
