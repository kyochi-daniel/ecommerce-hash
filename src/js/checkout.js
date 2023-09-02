import {
  leadLocalStorage,
  paintProductCheckoutBasic,
  deleteToLocalStorage,
  saveLocalStorage,
} from "./utility";

function paintProductCheckout() {
  const idProductCartAmount = leadLocalStorage("cart") ?? {};
  for (const idProduct in idProductCartAmount) {
    paintProductCheckoutBasic(
      idProduct,
      "container-products-checkout",
      idProductCartAmount[idProduct]
    );
  }
}

function finishCart(event) {
  event.preventDefault();
  const idProductCartAmount = leadLocalStorage("cart") ?? {};
  if (Object.keys(idProductCartAmount).length === 0) {
    return;
  }

  const currentDate = new Date();
  const orderPlace = {
    dateOrder: currentDate,
    order: idProductCartAmount,
  };

  const historicOrder = leadLocalStorage("historic") ?? [];
  const historicOrderUpdated = [orderPlace, ...historicOrder];

  saveLocalStorage("historic", historicOrderUpdated);
  deleteToLocalStorage("cart");

  window.location.href = window.location.origin + "/requests.html";
}

paintProductCheckout();

document.addEventListener("submit", (evt) => finishCart(evt));
