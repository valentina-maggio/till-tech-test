const Order = require('./order');

describe('Order', () => {
  it('adds an item to the order list', () => {
    const order = new Order();

    expect(order.addItem('Single Espresso')).toEqual('Added: Single Espresso, 2.05');
  });

  it('retrieves the correct price for the item ordered', () => {
    const order = new Order();
    order.addItem('Tiramisu');

    expect(order.getPrice('Tiramisu')).toBe(11.40);
  });

  it('retrieves correct the price for the item ordered', () => {
    const order = new Order();

    expect(order.getPrice('Cafe Latte')).toBe(4.75);
  });

  it('retrieves correct the price for the item ordered', () => {
    const order = new Order();

    expect(order.getPrice('Cafe Latte')).toBe(4.75);
  });

  it('adds the item and the price to the order list', () => {
    const order = new Order();
    order.addItem('Americano');

    expect(order.orderList[0]).toEqual(['Americano', 3.75]);
  });

  it('returns the list of items added to the order', () => {
    const order = new Order();
    order.addItem('Americano');
    order.addItem('Tiramisu');
    order.addItem('Flat White');

    expect(order.getOrder()).toEqual([
      ['Americano', 3.75],
      ['Tiramisu', 11.40],
      ['Flat White', 4.75],
    ]);
  });
});
