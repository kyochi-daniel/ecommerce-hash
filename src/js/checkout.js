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

<<<<<<< HEAD
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

  window.location.href = "./requests.html";
}

=======
>>>>>>> parent of b9fcf4b (add new files)
paintProductCheckout();
