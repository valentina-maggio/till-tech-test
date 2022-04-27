const moment = require('moment');
const fs = require('fs');

class Receipt {
  constructor() {
    this.shopDetails = '';
    this.table = '';
    this.staff = '';
    this.date = moment();
  }

  getDate() {
    const formattedDate = this.date.format('YYYY.MM.DD HH:mm:ss');
    return formattedDate;
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
    return `+${phoneNun[0]} `
    + `(${phoneNun.slice(1, 4)}) `
    + `${phoneNun.slice(4, 7)}-`
    + `${phoneNun.slice(7, 12)}`;
  }

  getTable(num = 1) {
    this.table = num;
    return `Table: ${this.table} / [4]`;
  }

  getStaff(name) {
    this.staff = name;
    return `${this.staff}`;
  }

  getItems(orderList) {
    return 'Americano    1 x 3.75';
  }
}

module.exports = Receipt;
