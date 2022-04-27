const fs = require('fs');

class Order {
  constructor() {
    this.orderList = [];
  }

  addItem(item) {
    const price = this.getPrice(item);
    this.orderList.push([item, price]);
    console.log(this.orderList);
    return `Added: ${item}, ${price}`;
  }

  getPrice(item) {
    const shopDetails = this.#getShopDetails();
    const price = shopDetails[0].prices[0][`${item}`];
    return price;
  }

  #getShopDetails() {
    const jsonString = fs.readFileSync('./hipstercoffee.json');
    const info = JSON.parse(jsonString);
    return info;
  }
}

module.exports = Order;
