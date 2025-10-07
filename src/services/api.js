export async function getTransfers() {
  // лише імітація, можна замінити потім
  return [
    { id: 1, from: "Аеропорт Шарль-де-Голль", to: "Центр Парижа", price: 45 },
    { id: 2, from: "Париж", to: "Версаль", price: 60 },
    { id: 3, from: "Париж", to: "Діснейленд", price: 75 },
    { id: 4, from: "Лувр", to: "Ейфелева вежа", price: 25 }
  ];
}
