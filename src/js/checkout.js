import { leadLocalStorage, paintProductCheckoutBasic } from "./utility";

function paintProductCheckout() {
  const idProductCartAmount = leadLocalStorage("cart");
  for (const idProduct in idProductCartAmount) {
    paintProductCheckoutBasic(
      idProduct,
      "container-products-checkout",
      idProductCartAmount[idProduct]
    );
  }
}

paintProductCheckout();
