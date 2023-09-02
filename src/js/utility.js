export const catalogo = [
  {
    id: "1",
    marca: "Zara",
    nome: "Camisa Larga com Bolsos",
    preco: 70,
    imagem: "product-1.jpg",
    feminino: false,
  },
  {
    id: "2",
    marca: "Zara",
    nome: "Casaco Reto com Lã",
    preco: 85,
    imagem: "product-2.jpg",
    feminino: true,
  },
  {
    id: "3",
    marca: "Zara",
    nome: "Jaqueta com Efeito Camurça",
    preco: 60,
    imagem: "product-3.jpg",
    feminino: false,
  },
  {
    id: "4",
    marca: "Zara",
    nome: "Sobretudo em Mescla de Lã",
    preco: 160,
    imagem: "product-4.jpg",
    feminino: false,
  },
  {
    id: "5",
    marca: "Zara",
    nome: "Camisa Larga Acolchoada de Veludo Cotelê",
    preco: 110,
    imagem: "product-5.jpg",
    feminino: false,
  },
  {
    id: "6",
    marca: "Zara",
    nome: "Casaco de Lã com Botões",
    preco: 170,
    imagem: "product-6.jpg",
    feminino: true,
  },
  {
    id: "7",
    marca: "Zara",
    nome: "Casaco com Botões",
    preco: 75,
    imagem: "product-7.jpg",
    feminino: true,
  },
  {
    id: "8",
    marca: "Zara",
    nome: "Colete Comprido com Cinto",
    preco: 88,
    imagem: "product-8.jpg",
    feminino: true,
  },
];

export function saveLocalStorage(key, information) {
  localStorage.setItem(key, JSON.stringify(information));
}

export function leadLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function deleteToLocalStorage(key) {
  localStorage.removeItem(key);
}

export function paintProductCheckoutBasic(
  idProduct,
  idContainerHtml,
  amountProduct
) {
  const product = catalogo.find((p) => p.id === idProduct);

  const containerProductCart = document.getElementById(idContainerHtml);

  const elementArticle = document.createElement("article");
  const articleClasses = [
    "relative",
    "flex",
    "gap-2",
    "bg-stone-200",
    "rounded-lg",
    "p-2",
    "mb-2",
    "w-80",
    "md:w-96"
  ];

  for (const articleClass of articleClasses) {
    elementArticle.classList.add(articleClass);
  }

  const cardProduct = `
      <img class="h-24 rounded-lg" src="../../src/assets/img/${product.imagem}" alt="${product.nome}">
      <div class="p-2 flex flex-col justify-between">
        <p class="text-slate-900 text-sm">${product.nome}</p>
        <p class="text-slate-400 text-xs">Tamanho: M</p>
        <p class="text-green-700 text-lg">$${product.preco}</p>
      </div>
      <div class='absolute flex gap-2 items-end text-slate-950 bottom-0 right-2 text-lg'>
        <p id='amount-${product.id}'>${amountProduct}</p>
      </div>
  `;

  elementArticle.innerHTML = cardProduct;
  containerProductCart.appendChild(elementArticle);
}
