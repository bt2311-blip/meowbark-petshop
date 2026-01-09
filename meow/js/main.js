// ======================
//  Налаштування кошика
// ======================
const CART_KEY = "cartItems"; 
// Завантажити кошик з localStorage
function loadCart() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Помилка читання кошика з localStorage", e);
    return [];
  }
}
// Зберегти кошик у localStorage
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
// Поточний стан кошика
let cart = loadCart();
// ========================
//  Оновлення UI кошика
// ========================
// Кількість товарів у кошику (сума quantity)
function getCartCount() {
  return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
}
// Оновити цифру біля іконки кошика в хедері
function updateCartCountUI() {
  const cartCountEl = document.getElementById("cart-count");
  if (!cartCountEl) return;
  cartCountEl.textContent = getCartCount();
}
// Рендер міні-кошика у випадаючому блоці
function renderMiniCart() {
  const itemsContainer = document.getElementById("cart-dropdown-items");
  const totalEl = document.getElementById("cart-dropdown-total");

  if (!itemsContainer || !totalEl) return;
  itemsContainer.innerHTML = "";
  if (!cart || cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-dropdown-empty">
        Кошик порожній 🙂
      </div>
    `;
    totalEl.textContent = "0 грн";
    return;
  }
  let total = 0;
  cart.forEach((item) => {
    const itemEl = document.createElement("div");
    itemEl.className = "cart-dropdown-item";
    const imgSrc = item.image || ""; 
    itemEl.innerHTML = `
      <div class="cart-dropdown-thumb">
        ${imgSrc ? `<img src="${imgSrc}" alt="${item.name}">` : ""}
      </div>
      <div class="cart-dropdown-info">
        <div class="cart-dropdown-name">${item.name}</div>
        <div class="cart-dropdown-meta">
          ${item.quantity} × ${item.price} грн
        </div>
      </div>
    `;
    itemsContainer.appendChild(itemEl);
    total += item.price * item.quantity;
  });
  totalEl.textContent = total.toFixed(2) + " грн";
}
// ========================
//  Робота з кошиком
// ========================
// Додати товар у кошик
function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.quantity += product.quantity;
  } else {
    cart.push(product);
  }
  saveCart(cart);
  updateCartCountUI();
  renderMiniCart();
}
// =============================
//  Обробка кнопок "Купити"
// =============================
// Делегування кліків по всьому document
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-add-to-cart]");
  if (!button) return;
  const productCard = button.closest("[data-product]");
  if (!productCard) return;
  const id = productCard.dataset.id;
  const name = productCard.dataset.name;
  const price = parseFloat(productCard.dataset.price || "0");
  const image = productCard.dataset.image || "";
  if (!id || !name) {
    console.warn("Не вистачає data-атрибутів на товарі");
    return;
  }
  addToCart({
    id,
    name,
    price,
    quantity: 1,
    image,
  });
  // Невеликий візуальний фідбек
  const originalText = button.textContent;
  button.textContent = "Додано!";
  button.disabled = true;
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 800);
});
// ========================
//  Ініціалізація сторінки
// ========================
document.addEventListener("DOMContentLoaded", () => {
  // ще раз підтягуємо з localStorage (раптом змінено на іншій сторінці)
  cart = loadCart();
  updateCartCountUI();
  renderMiniCart();
});

