// const fs = require('fs');

class Order {
  constructor() {
    this.orderList = [];
  }

  addItem(item, qty) {
    this.orderList.push([item, qty]);
    return `Added: ${qty} x ${item}`;
  }

  // getPrice(item) {
  //   const shopDetails = this.#getShopDetails();
  //   const price = shopDetails[0].prices[0][`${item}`];
  //   return price;
  // }

  getOrder() {
    return this.orderList;
  }

  printReceipt() {
    return 'Americano 1 x 4.75';
  }

  // #getShopDetails() {
  //   const jsonString = fs.readFileSync('./hipstercoffee.json');
  //   const info = JSON.parse(jsonString);
  //   return info;
  // }
}

module.exports = Order;
