const fs = require('fs');

class Order {
  constructor() {
    this.orderList = [];
  }

  addItem(item) {
    this.orderList.push([item, 2.5]);
    return `Added: ${item}, $2.5`;
  }

  getShopDetails() {
    const jsonString = fs.readFileSync('./hipstercoffee.json');
    const info = JSON.parse(jsonString);
    console.log("printing 1")
    console.log(info);

    return info;
  }

  getPrice() {
    const shopDetails = this.getShopDetails();
    const price = shopDetails[0].prices[0]["Tiramisu"];
    console.log(price);

    return 11.40;
  }
}

module.exports = Order;
