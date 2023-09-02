const catalogProducts = document.getElementById("container-product");

function showAll() {
  const hidesProducts = Array.from(
    catalogProducts.getElementsByClassName("hidden")
  );

  for (const product of hidesProducts) {
    product.classList.remove("hidden");
  }
}

function hideMales() {
  showAll();
  const productsMales = Array.from(
    catalogProducts.getElementsByClassName("male")
  );

  for (const product of productsMales) {
    product.classList.add("hidden");
  }
}

function hideFemales() {
  showAll();
  const productsFemales = Array.from(
    catalogProducts.getElementsByClassName("female")
  );

  for (const product of productsFemales) {
    product.classList.add("hidden");
  }
}

export function startFilter() {
  document.getElementById("show-all").addEventListener("click", showAll);
  document.getElementById("show-female").addEventListener("click", hideMales);
  document.getElementById("show-male").addEventListener("click", hideFemales);
}
