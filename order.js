const Receipt = require("./receipt");

class Order {
  constructor() {
    this.orderList = [];
    this.receipt = new Receipt();
  }

  addItem(item, qty) {
    this.orderList.push([item, qty]);
    return `Added: ${qty} x ${item}`;
  }

  getOrder() {
    return this.orderList;
  }

  printReceipt() {
    return this.receipt.getReceipt(this.orderList);
  }
}

module.exports = Order;
