const Receipt = require('./receipt');

describe('Receipt', () => {
  it('returns an instance of the Receipt class', () => {
    const receipt = new Receipt();

    expect(receipt).toBeInstanceOf(Receipt);
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

    expect(receipt.getPhone()).toBe('16503600708');
  });

  it('returns the items in the order with prices and quantities', () => {
    const receipt = new Receipt();

    expect(receipt.getItems(['Americano', 3.75])).toBe('Americano    1 x 3.75');
  });
});
