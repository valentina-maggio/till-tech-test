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

  it('returns the shop details', () => {
    const order = new Order();
    expect(order.getShopDetails()).toEqual([
      {
        shopName: 'The Coffee Connection',
        address: '123 Lakeside Way',
        phone: '16503600708',
        prices: [ 
          {
            "Cafe Latte": 4.75,
            "Flat White": 4.75,
            "Cappuccino": 3.85,
            "Single Espresso": 2.05,
            "Double Espresso": 3.75,
            "Americano": 3.75,
            "Cortado": 4.55,
            "Tea": 3.65,
            "Choc Mudcake": 6.40,
            "Choc Mousse": 8.20,
            "Affogato": 14.80,
            "Tiramisu": 11.40,
            "Blueberry Muffin": 4.05,
            "Chocolate Chip Muffin": 4.05,
            "Muffin Of The Day": 4.55
          }
        ] 
      }
    ]);
  });

  it('returns the price for the item', () => {
    const order = new Order();
    expect(order.getPrice()).toBe(11.40);
  });
});
