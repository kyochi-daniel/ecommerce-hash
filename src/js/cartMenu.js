import { catalogo, saveLocalStorage, leadLocalStorage } from "./utility";

const idProductCartAmount = leadLocalStorage("cart") ?? {};

function openCart() {
  document.getElementById("cart").classList.remove("right-[-360px]");
  document.getElementById("cart").classList.add("right-[0px]");
}

function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

function goTheCheckout() {
  if (Object.keys(idProductCartAmount).length === 0) {
    return;
  }
  window.location.href = "./checkout.html";
}

export function startCart() {
  const open = document.getElementById("button-cart");
  const close = document.getElementById("close-cart");
  const checkout = document.getElementById("checkout-page");

  open.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);
  checkout.addEventListener("click", goTheCheckout);
}

function removeProductCart(idProduct) {
  delete idProductCartAmount[idProduct];
  saveLocalStorage("cart", idProductCartAmount);
  updatePriceCart();
  renderProductCart();
}

function incrementAmountProdutct(idProduct) {
  idProductCartAmount[idProduct]++;
  saveLocalStorage("cart", idProductCartAmount);
  updatePriceCart();
  updateAmount(idProduct);
}

function decrementAmountProdutct(idProduct) {
  if (idProductCartAmount[idProduct] === 1) {
    removeProductCart(idProduct);
    return;
  }
  idProductCartAmount[idProduct]--;
  saveLocalStorage("cart", idProductCartAmount);
  updatePriceCart();
  updateAmount(idProduct);
}

function updateAmount(idProduct) {
  document.getElementById(`amount-${idProduct}`).innerText =
    idProductCartAmount[idProduct];
}

function paintProductCart(idProduct) {
  const product = catalogo.find((p) => p.id === idProduct);

  const containerProductCart = document.getElementById("products-cart");

  const elementArticle = document.createElement("article");
  const articleClasses = [
    "relative",
    "flex",
    "gap-2",
    "bg-slate-100",
    "rounded-lg",
    "p-2",
  ];

  for (const articleClass of articleClasses) {
    elementArticle.classList.add(articleClass);
  }

  const cardProduct = `
      <button id="remove-item-${
        product.id
      }" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-700 duration-100"></i></button>
      <img class="h-24 rounded-lg" src="./src/assets/img/${
        product.imagem
      }" alt="${product.nome}">
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${product.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${product.preco}</p>
      </div>
      <div class='absolute flex gap-2 items-end text-slate-950 bottom-0 right-2 text-lg'>
        <button id='decrement-product-${product.id}'>-</button>
        <p id='amount-${product.id}'>${idProductCartAmount[product.id]}</p>
        <button id='increment-product-${product.id}'>+</button>
      </div>
  `;

  elementArticle.innerHTML = cardProduct;
  containerProductCart.appendChild(elementArticle);

  document
    .getElementById(`increment-product-${product.id}`)
    .addEventListener("click", () => incrementAmountProdutct(product.id));

  document
    .getElementById(`decrement-product-${product.id}`)
    .addEventListener("click", () => decrementAmountProdutct(product.id));

  document
    .getElementById(`remove-item-${product.id}`)
    .addEventListener("click", () => removeProductCart(product.id));
}

export function renderProductCart() {
  const containerProductCart = document.getElementById("products-cart");
  containerProductCart.innerHTML = "";

  for (const idProduct in idProductCartAmount) {
    paintProductCart(idProduct);
  }
}

export function addItemCart(idProduct) {
  if (idProduct in idProductCartAmount) {
    incrementAmountProdutct(idProduct);
    return;
  }

  idProductCartAmount[idProduct] = 1;
  saveLocalStorage("cart", idProductCartAmount);
  paintProductCart(idProduct);
  updatePriceCart();
}

export function updatePriceCart() {
  const priceCart = document.getElementById("price-total");

  let totalPriceCart = 0;
  for (const idProductInCart in idProductCartAmount) {
    totalPriceCart +=
      catalogo.find((p) => p.id === idProductInCart).preco *
      idProductCartAmount[idProductInCart];
  }

  priceCart.innerText = `Total: $${totalPriceCart}`;
}
