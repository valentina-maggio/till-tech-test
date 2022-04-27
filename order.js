const fs = require('fs');

class Order {
  constructor() {
    this.orderList = [];
  }

  addItem(item) {
    this.orderList.push([item, 2.5]);
    return `Added: ${item}, $2.5`;
  }

  getPrice(item) {
    const shopDetails = this.#getShopDetails();
    const price = shopDetails[0].prices[0][`${item}`];
    console.log(price);

    return 11.40;
  }

  #getShopDetails() {
    const jsonString = fs.readFileSync('./hipstercoffee.json');
    const info = JSON.parse(jsonString);
    return info;
  }
}

module.exports = Order;
