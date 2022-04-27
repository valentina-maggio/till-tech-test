const Order = require('./order');

describe('Order', () => {
  it('adds an item to the order list', () => {
    const order = new Order();

    expect(order.addItem('coffee')).toEqual('Added: coffee, $2.5');
  });
});
