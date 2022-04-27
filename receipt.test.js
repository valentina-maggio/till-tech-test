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

  it('returns the items in the order with prices and quantities', () => {
    const receipt = new Receipt();

    expect(receipt.getItems(['Americano', 3.75])).toBe('Americano    1 x 3.75');
  });
});
