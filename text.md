function updatePriceCart() {
  const priceCart = document.getElementById("price-total");

  let priceTotalCart = 0;

  for (const idProductInCart in idProductCartAmount) {
    priceTotalCart +=
      catalogo.find((p) => p.id === idProductCartAmount).preco *
      idProductCartAmount[idProductInCart];
  }
  priceCart.innerHTML = `Total: $${priceTotalCart}`;
}