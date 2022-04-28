const Order = require('./order');

jest.mock('moment', () => () => jest.requireActual('moment')('2022-11-27T20:00:00.000Z'));

describe('Order', () => {
  it('adds an item to the order list', () => {
    const order = new Order();

    expect(order.addItem('Single Espresso', 1)).toEqual('Added: 1 x Single Espresso');
  });

  // it('retrieves the correct price for the item ordered', () => {
  //   const order = new Order();
  //   order.addItem('Tiramisu');

  //   expect(order.getPrice('Tiramisu')).toBe(11.40);
  // });

  // it('retrieves correct the price for the item ordered', () => {
  //   const order = new Order();

  //   expect(order.getPrice('Cafe Latte')).toBe(4.75);
  // });

  // it('retrieves correct the price for the item ordered', () => {
  //   const order = new Order();

  //   expect(order.getPrice('Cafe Latte')).toBe(4.75);
  // });

  it('adds the item and the quantity to the order list', () => {
    const order = new Order();
    order.addItem('Americano', 1);

    expect(order.orderList[0]).toEqual(['Americano', 1]);
  });

  it('returns the list of items added to the order', () => {
    const order = new Order();
    order.addItem('Americano', 1);
    order.addItem('Tiramisu', 1);
    order.addItem('Flat White', 1);

    expect(order.getOrder()).toEqual([
      ['Americano', 1],
      ['Tiramisu', 1],
      ['Flat White', 1],
    ]);
  });

  it('prints the receipt with full order', () => {
    const order = new Order();
    order.addItem('Americano', 1);
    order.addItem('Cappuccino', 2);

    expect(order.printReceipt([['Americano', 1], ['Cappuccino', 2]])).toBe('2022.11.27 20:00:00'
      + '\n'
      + 'The Coffee Connection\n'
      + '\n'
      + '123 Lakeside Way\n'
      + '+1 (650) 360-0708\n'
      + '\n'
      + 'Table: 1 / [4]\n'
      + 'Jane\n'
      + 'Americano    1 x 3.75\n'
      + 'Cappuccino    2 x 3.85\n'
      + '\n'
      + 'Thank You!');
  });
});
