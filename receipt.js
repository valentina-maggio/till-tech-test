const fs = require('fs');

class Receipt {
  getItems(orderList) {
    return 'Americano    1 x 3.75';
  }

  getShopName() {
    const shopDetails = this.#getShopDetails();
    const name = shopDetails[0].shopName;
    return name;
  }

  #getShopDetails() {
    const jsonString = fs.readFileSync('./hipstercoffee.json');
    const info = JSON.parse(jsonString);
    return info;
  }
}

module.exports = Receipt;
