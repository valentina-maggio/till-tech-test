const Receipt = require('./receipt');

describe('Receipt', () => {
  it('returns an instance of the Receipt class', () => {
    const receipt = new Receipt();

    expect(receipt).toBeInstanceOf(Receipt);
  });

  it('returns the items in the order with prices and quantities', () => {
    const receipt = new Receipt();

    expect(receipt.getItems(['Americano', 3.75])).toBe('Americano    1 x 3.75');
  });

  it('returns the coffee shop name', () => {
    const receipt = new Receipt();

    expect(receipt.getShopName('The Coffee Connection')).toBe('The Coffee Connection');
  });

  it('returns the coffee shop address', () => {
    const receipt = new Receipt();

    expect(receipt.getShopAddress('123 Lakeside Way')).toBe('123 Lakeside Way');
  });

  it('returns the coffee shop phone number', () => {
    const receipt = new Receipt();

    expect(receipt.getPhone('16503600708')).toBe('16503600708');
  });
});
