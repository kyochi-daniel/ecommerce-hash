import { catalogo } from "./utility";

function openCart() {
  document.getElementById("cart").classList.remove("right-[-360px]");
  document.getElementById("cart").classList.add("right-[0px]");
}

function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

export function startCart() {
  const open = document.getElementById("button-cart");
  const close = document.getElementById("close-cart");
  open.addEventListener("click", openCart);
  close.addEventListener("click", closeCart);
}

export function addItemCart(idProduct) {
  const product = catalogo.find((p) => p.id === idProduct);

  const containerProductCart = document.getElementById("products-cart");

  const cardProduct = `
    <article class="relative flex gap-2 bg-slate-100 rounded-lg p-2">
      <button id="close-cart" class="absolute top-0 right-2"><i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-700 duration-100"></i></button>
      <img class="h-24 rounded-lg" src="./src/assets/img/${product.imagem}" alt="${product.nome}">
      <div class="py-2">
        <p class="text-slate-900 text-sm">${product.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${product.preco}</p>
      </div>
    </article>
  `;

  containerProductCart.innerHTML += cardProduct;
}
