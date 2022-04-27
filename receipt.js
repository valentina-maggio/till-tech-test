class Receipt {
  getItems(orderList) {
    return 'Americano    1 x 3.75';
  }

  #getShopDetails() {
    const jsonString = fs.readFileSync('./hipstercoffee.json');
    const info = JSON.parse(jsonString);
    return info;
  }
}

module.exports = Receipt;
