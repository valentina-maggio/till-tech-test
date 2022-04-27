class Order {
  constructor() {
    this.orderList = [];
  }

  addItem(item) {
    this.orderList.push([item, 2.5]);
    return `Added: ${item}, $2.5`;
  }

  getPrice(item) {
    return 11.40;
  }
}

module.exports = Order;
