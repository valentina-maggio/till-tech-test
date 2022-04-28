const Receipt = require('./receipt');

jest.mock('moment', () => () => jest.requireActual('moment')('2022-11-27T20:00:00.000Z'));

describe('Receipt', () => {
  it('returns an instance of the Receipt class', () => {
    const receipt = new Receipt();

    expect(receipt).toBeInstanceOf(Receipt);
  });

  it('returns the date and time of the receipt', () => {
    const receipt = new Receipt();

    const date = receipt.getDate();
    expect(date).toEqual('2022.11.27 20:00:00');
  });

  it('returns the coffee shop name', () => {
    const receipt = new Receipt();
    receipt.getShopDetails();

    expect(receipt.getShopName()).toBe('The Coffee Connection');
  });

  it('returns the coffee shop address', () => {
    const receipt = new Receipt();
    receipt.getShopDetails();

    expect(receipt.getShopAddress()).toBe('123 Lakeside Way');
  });

  it('returns the coffee shop phone number', () => {
    const receipt = new Receipt();
    receipt.getShopDetails();

    expect(receipt.getPhone()).toBe('+1 (650) 360-0708');
  });

  it('returns the table number', () => {
    const receipt = new Receipt();

    expect(receipt.getTable()).toBe('Table: 1 / [4]');
  });

  it('returns the staff name', () => {
    const receipt = new Receipt();

    expect(receipt.getStaff('Jane')).toBe('Jane');
  });

  it('returns the item in the order with price and quantity', () => {
    const receipt = new Receipt();
    receipt.getShopDetails();

    expect(receipt.getItems([['Americano', 1]])).toBe('Americano    1 x 3.75');
  });

  it('returns a list of items in the order', () => {
    const receipt = new Receipt();
    receipt.getShopDetails();

    expect(receipt.getItems([['Americano', 1], ['Cappuccino', 2]])).toBe('Americano    1 x 3.75'
    + '\nCappuccino    2 x 3.85');
  });

  it('returns Thank You! as a footer for the receipt', () => {
    const receipt = new Receipt();

    expect(receipt.getFooter()).toBe('Thank You!');
  });

  it('returns the full receipt', () => {
    const receipt = new Receipt();
    receipt.getShopDetails();

    expect(receipt.getReceipt([['Americano', 1], ['Cappuccino', 2]])).toBe('2022.11.27 20:00:00'
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
