const fs = require('fs');

class Receipt {
  constructor() {
    this.shopDetails = '';
  }

  getShopDetails() {
    const jsonString = fs.readFileSync('./hipstercoffee.json');
    const info = JSON.parse(jsonString);
    this.shopDetails = info;
    return this.shopDetails;
  }

  getShopName() {
    const name = this.shopDetails[0].shopName;
    return name;
  }

  getShopAddress() {
    const location = this.shopDetails[0].address;
    return location;
  }

  getPhone() {
    const phoneNun = this.shopDetails[0].phone;
    return phoneNun;
  }

  getItems(orderList) {
    return 'Americano    1 x 3.75';
  }
}

module.exports = Receipt;
