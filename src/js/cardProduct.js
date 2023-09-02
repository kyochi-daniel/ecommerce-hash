import { catalogo } from "./utility";
import { addItemCart } from "./cartMenu";

export function renderCatalog() {
  for (const produtoCatalago of catalogo) {
    const cartaoProduto = `
      <div id='card-product' class="w-52 h-[450px] rounded-md p-3 bg-white flex flex-col justify-between shadow-xl shadow-slate-300 group ${produtoCatalago.feminino ? 'female' : 'male'}">
        <img class="object-cover rounded-sm opacity-80 group-hover:scale-105 group-hover:opacity-100 duration-300" src="./assets/img/${produtoCatalago.imagem}" alt="${produtoCatalago.nome}">
        <p class="text-zinc-400  text-sm">${produtoCatalago.marca}</p>
        <p class="text-slate-700 text-sm">${produtoCatalago.nome}</p>
        <p class="text-green-700 text-lg">$${produtoCatalago.preco}</p>
        <button id="add-${produtoCatalago.id}" class="bg-slate-950 text-slate-200 rounded-md p-[2px] hover:bg-slate-700 duration-100"><i class="fa-solid fa-cart-plus"></i></button>
      </div>
    `;

    document.getElementById("container-product").innerHTML += cartaoProduto;
  }

  for (const produtoCatalago of catalogo) {
    document
      .getElementById(`add-${produtoCatalago.id}`)
      .addEventListener("click", () => addItemCart(produtoCatalago.id));
  }
}
