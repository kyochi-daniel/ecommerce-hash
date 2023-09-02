import { leadLocalStorage, paintProductCheckoutBasic } from "./utility";

function createHistoricOrder(orderDate) {
  const elementOrder = `
    <p class="text-xl text-bold my-4">${new Date(
      orderDate.dateOrder
    ).toLocaleDateString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })}</p>
    <section id='container-orders-${
      orderDate.dateOrder
    }' class='bg-slate-300 p-3 rounded-md'></section>
  `;
  const main = document.getElementsByTagName("main")[0];
  main.innerHTML += elementOrder;

  for (const idProduct in orderDate.order) {
    paintProductCheckoutBasic(
      idProduct,
      `container-orders-${orderDate.dateOrder}`,
      orderDate.order[idProduct]
    );
  }
}

function renderHistoricOrder() {
  const historic = leadLocalStorage("historic");
  for (const orderDate of historic) {
    createHistoricOrder(orderDate);
  }
}

renderHistoricOrder();
