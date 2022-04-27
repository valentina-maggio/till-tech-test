const Order = require('./order');

describe('Order', () => {
  it('adds an item to the order list', () => {
    const order = new Order();

    expect(order.addItem('coffee')).toEqual('Added: coffee, $2.5');
  });

  it('retrieves the price for the item ordered', () => {
    const order = new Order();
    order.addItem('Tiramisu');

    expect(order.getPrice('Tiramisu')).toBe(11.40);
  });

  it('returns the price for the item', () => {
    const order = new Order();
    expect(order.getPrice()).toBe(11.40);
  });
});
