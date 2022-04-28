const moment = require('moment');
const fs = require('fs');

class Receipt {
  constructor() {
    this.shopDetails = '';
    this.table = '';
    this.staff = '';
    this.date = moment();
    this.footer = 'Thank You!';
  }

  getShopDetails() {
    const jsonString = fs.readFileSync('./hipstercoffee.json');
    const info = JSON.parse(jsonString);
    this.shopDetails = info;
    return this.shopDetails;
  }

  getDate() {
    const formattedDate = this.date.format('YYYY.MM.DD HH:mm:ss');
    return formattedDate;
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

  getStaff(name = 'Jane') {
    this.staff = name;
    return `${this.staff}`;
  }

  getItems(orderList) {
    const list = orderList.map((item) => `${item[0]}    ${item[1]} x ${this.shopDetails[0].prices[0][item[0]]}`);
    return list.join('\n');
  }

  getFooter() {
    return this.footer;
  }

  getReceipt(orderList) {
    this.getShopDetails();

    const receipt = `${this.getDate()}\n`
    + `${this.getShopName()}\n`
    + ''
    + '\n'
    + `${this.getShopAddress()}\n`
    + `${this.getPhone()}\n`
    + ''
    + '\n'
    + `${this.getTable()}\n`
    + `${this.getStaff()}\n`
    + `${this.getItems(orderList)}\n`
    + ''
    + '\n'
    + `${this.getFooter()}`;

    return receipt;
  }
}

module.exports = Receipt;
