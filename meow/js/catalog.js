
const products = [
  {
    id: "dog-food-1",
    name: "Сухий корм для собак Savory Small Breed 12 кг",
    price: 2700,
    category: "food",
    animal: "dog",
    image: "./image/food-dog-savory.png",
  },
  {
    id: "dog-ball-1",
    name: "Pet Fun іграшка для собак м'ячик 8 см - помаранчевий",
    price: 179,
    category: "toys",
    animal: "dog",
    image: "./image/ball.png",
  },
  {
    id: "dog-snack-1",
    name: "Carnilove Soft Snack ласощі для собак 200 г",
    price: 194.65,
    category: "food",
    animal: "dog",
    image: "./image/snack.png",
  },
  {
    id: "cat-food-1",
    name: "Сухий корм для дорослих котів Club 4 Paws 2 кг",
    price: 399,
    category: "food",
    animal: "cat",
    image: "./image/feed-cat-4paws.png",
  },
  {
    id: "cat-toy-1",
    name: "Іграшка Trixie Мишка з брязкальцем для котів, 5 см",
    price: 39,
    category: "toys",
    animal: "cat",
    image: "./image/mouse-toy.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "bird-food-1",
    name: "Корм для папуг Parrot Mix 1 кг",
    price: 220,
    category: "food",
    animal: "bird",
    image: "./image/parrot-feed.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "bird-toy-1",
    name: "Іграшка для котів Pet Fun Пташка блакитна 8 см",
    price: 119,
    category: "toys",
    animal: "cat",
    image: "./image/bird-toy.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "dog-accessory-1",
    name: "Pet Fun Oxford сумка-переноска для собак - бежевий",
    price: 1450,
    category: "accessories",
    animal: "dog",
    image: "./image/bag-carrier.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "bandana-1",
    name: "Pet Fun бандана для котів XS-S",
    price: 90,
    category: "accessories",
    animal: "cat",
    image: "./image/bandana.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "backpack-1",
    name: "Pet Fun рюкзак-переноска для собак 34х28х41 см",
    price: 2499,
    category: "accessories",
    animal: "dog",
    image: "./image/backpack.png",
  },
  {
    id: "feed-humster-1",
    name: "Корм для середніх гризунів Лорівіт, повнораціонний, 1200г",
    price: 110,
    category: "food",
    animal: "rodent",
    image: "./image/feed-humster.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "toy-bird-1",
    name: "Іграшка для птахів Trixie Natural Living підвісна 16 см",
    price: 135,
    category: "toys",
    animal: "bird",
    image: "./image/toy-bird.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "feed-rodent-1",
    name: "Ласощі для гризунів Special One 90 г / 2 шт. (овочевий мікс)",
    price: 99.99,
    category: "food",
    animal: "rodent",
    image: "./image/feed-rodent.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "ammunition-cat-1",
    name: "Trixie My Home нашийник з адресником для кошенят",
    price: 131,
    category: "accessories",
    animal: "cat",
    image: "./image/ammunition-cat.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "food-dog-1",
    name: "Savory Gourmand Adult упаковка вологого корму для собак 5+1шт х 400г",
    price: 1150.11,
    category: "food",
    animal: "dog",
    image: "./image/dog-savory.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "toy-rodent-1",
    name: "Іграшка для гризунів Trixie Канат з дерев'яними блоками 20 см",
    price: 102,
    category: "toys",
    animal: "rodent",
    image: "./image/toy-rodent.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "wet-food-cat-1",
    name: "Purina Pro Plan Sterilised Maintenance вологий корм для котів 85 г",
    price: 46,
    category: "food",
    animal: "cat",
    image: "./image/wet-food-cat.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "toilet-rodent-1",
    name: "Trixie туалет для гризунів 36x21x30",
    price: 156,
    category: "accessories",
    animal: "rodent",
    image: "./image/toilet-rodent.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "filler-rodent-1",
    name: "Мій Пухнастик тирса пресована для гризунів 1 кг",
    price: 134,
    category: "accessories",
    animal: "rodent",
    image: "./image/filler-rodent.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "feeder-bird-1",
    name: "Trixie Feeding Lantern годівниця для птахів 300 млг",
    price: 299.99,
    category: "accessories",
    animal: "bird",
    image: "./image/feeder-bird.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "dry-food-cat-1",
    name: "Сухий корм для котів Hill’s Science Plan Adult 1-6, 15 кг - курка",
    price: 6790,
    category: "food",
    animal: "cat",
    image: "./image/dry-food-cat.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "dry-food-dog-1",
    name: "Сухий корм для собак з чутливим травленням Acana Grass-Fed Lamb 17 кг (ягня)",
    price: 9727,
    category: "food",
    animal: "dog",
    image: "./image/dry-food-dog.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "dry-food-bird-1",
    name: "Корм для середніх африканських папуг Vitakraft «African» 750 г",
    price: 508.08,
    category: "food",
    animal: "bird",
    image: "./image/dry-food-bird.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
  {
    id: "dry-food-rodent-1",
    name: "Корм для кроликів Vitakraft «Emotion Beauty Selection» 1,5 кг (для шкіри та шерсті)",
    price: 1136,
    category: "food",
    animal: "rodent",
    image: "./image/dry-food-rodent.png",

    description: `ДОВГИЙ гарний опис товару...`,
  },
];


// ====== допоміжні лейбли ======

function getCategoryLabel(category) {
  switch (category) {
    case "food":
      return "Корм";
    case "toys":
      return "Іграшки";
    case "accessories":
      return "Аксесуари";
    default:
      return "";
  }
}

function getAnimalLabel(animal) {
  switch (animal) {
    case "dog":
      return "Для собак";
    case "cat":
      return "Для котів";
    case "bird":
      return "Для птахів";
    case "rodent":
      return "Для гризунів";
    default:
      return "";
  }
}

// ====== DOM-елементи ======

let productsGrid;
let productsCountEl;
let noResultsEl;
let searchInput;
let priceMinInput;
let priceMaxInput;
let priceRangeInput;
let priceRangeValueEl;

// ====== створення картки товару ======

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  // ВАЖЛИВО: це читає main.js для кошика
  card.dataset.product = "1";
  card.dataset.id = product.id;
  card.dataset.name = product.name;
  card.dataset.price = product.price;
  card.dataset.image = product.image || "";

  card.dataset.category = product.category;
  card.dataset.animal = product.animal;

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-info">
      <div class="product-tags">
        <span class="product-tag">${getCategoryLabel(product.category)}</span>
        <span class="product-tag product-tag--animal">${getAnimalLabel(product.animal)}</span>
      </div>
      <h3 class="product-name">${product.name}</h3>
      <div class="product-bottom">
        <span class="product-price">${product.price.toLocaleString("uk-UA")} грн</span>
        <button class="product-buy-btn" type="button" data-add-to-cart>
          Купити
        </button>
      </div>
    </div>
  `;

  // Клік по картці → переходимо на сторінку товару
  card.addEventListener("click", (event) => {
    const buyBtn = event.target.closest("[data-add-to-cart]");
    if (buyBtn) return; // щоб "Купити" не відкривало картку

    window.location.href = `product.html?id=${encodeURIComponent(product.id)}`;
  });

  return card;
}


function renderProducts(list) {
  productsGrid.innerHTML = "";

  if (!list.length) {
    noResultsEl.hidden = false;
    productsCountEl.textContent = "0 товарів";
    return;
  }

  noResultsEl.hidden = true;
  productsCountEl.textContent = `${list.length} товарів`;

  list.forEach((p) => {
    productsGrid.appendChild(createProductCard(p));
  });
}

// ====== збір фільтрів ======

function collectFilters() {
  const selectedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((el) => el.value);

  const selectedAnimals = Array.from(
    document.querySelectorAll('input[name="animal"]:checked')
  ).map((el) => el.value);

  const minPrice = Number(priceMinInput.value) || 0;
  const maxPrice =
    Number(priceMaxInput.value) || Math.max(...products.map((p) => p.price));

  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  return { selectedCategories, selectedAnimals, minPrice, maxPrice, query };
}

function applyFilters() {
  const { selectedCategories, selectedAnimals, minPrice, maxPrice, query } =
    collectFilters();

  const filtered = products.filter((p) => {
    const byCategory =
      !selectedCategories.length || selectedCategories.includes(p.category);
    const byAnimal =
      !selectedAnimals.length || selectedAnimals.includes(p.animal);
    const byPrice = p.price >= minPrice && p.price <= maxPrice;
    const bySearch =
      !query || p.name.toLowerCase().includes(query);

    return byCategory && byAnimal && byPrice && bySearch;
  });

  renderProducts(filtered);
}

function initPriceControls() {
  const maxProductPrice = Math.max(...products.map((p) => p.price));
  if (!priceMaxInput.value || Number(priceMaxInput.value) === 0) {
    priceMaxInput.value = maxProductPrice;
  }
  priceRangeInput.max = maxProductPrice;
  priceRangeInput.value = priceMaxInput.value;
  priceRangeValueEl.textContent = `до ${priceMaxInput.value}`;
}

// ====== DOMContentLoaded ======

document.addEventListener("DOMContentLoaded", () => {
  productsGrid = document.getElementById("products-grid");
  productsCountEl = document.getElementById("products-count");
  noResultsEl = document.getElementById("no-results");
  searchInput = document.getElementById("search-input");
  priceMinInput = document.getElementById("price-min");
  priceMaxInput = document.getElementById("price-max");
  priceRangeInput = document.getElementById("price-range");
  priceRangeValueEl = document.getElementById("price-range-value");

  // 1) ціни
  initPriceControls();

  // 2) читаємо параметри з URL
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category"); // food / toys / accessories
  const initialAnimal = params.get("animal");     // dog / cat / bird / rodent

  if (initialCategory) {
    const categoryCheckboxes = document.querySelectorAll(
      'input[name="category"]'
    );
    categoryCheckboxes.forEach((cb) => {
      cb.checked = cb.value === initialCategory;
    });
  }

  if (initialAnimal) {
    const animalCheckboxes = document.querySelectorAll(
      'input[name="animal"]'
    );
    animalCheckboxes.forEach((cb) => {
      cb.checked = cb.value === initialAnimal;
    });
  }

  // 3) первинний рендер з урахуванням URL
  applyFilters();

  // чекбокси
  document
    .querySelectorAll('input[name="category"], input[name="animal"]')
    .forEach((input) => {
      input.addEventListener("change", applyFilters);
    });

  // ціни
  priceMinInput.addEventListener("input", applyFilters);

  priceMaxInput.addEventListener("input", () => {
    const val = Number(priceMaxInput.value) || 0;
    priceRangeInput.value = val;
    priceRangeValueEl.textContent = `до ${val}`;
    applyFilters();
  });

  priceRangeInput.addEventListener("input", () => {
    const val = Number(priceRangeInput.value);
    priceMaxInput.value = val;
    priceRangeValueEl.textContent = `до ${val}`;
    applyFilters();
  });

  // пошук у хедері
  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  // кнопка "Скинути фільтри"
  const resetBtn = document.getElementById("reset-filters");
  resetBtn.addEventListener("click", () => {
    document
      .querySelectorAll('input[name="category"], input[name="animal"]')
      .forEach((input) => (input.checked = true));

    priceMinInput.value = 0;
    const maxProductPrice = Math.max(...products.map((p) => p.price));
    priceMaxInput.value = maxProductPrice;
    priceRangeInput.value = maxProductPrice;
    priceRangeValueEl.textContent = `до ${maxProductPrice}`;

    if (searchInput) searchInput.value = "";

    applyFilters();
  });
});
