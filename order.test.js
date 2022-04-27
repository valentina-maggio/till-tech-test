const Order = require('./order');

describe('Order', () => {
  it('adds an item to the order list', () => {
    const order = new Order();

    expect(order.addItem('coffee')).toEqual('Added: coffee, $2.5');
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
});
