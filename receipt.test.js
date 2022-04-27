const Receipt = require('./receipt');

describe('Receipt', () => {
  it('returns an instance of the Receipt class', () => {
    const receipt = new Receipt();

    expect(receipt).toBeInstanceOf(Receipt);
  });

  it('returns the items in the order with prices and quantities', () => {
    const receipt = new Receipt();

    expect(receipt.printItems(['Americano', 3.75])).toBe('Americano    1 x 3.75');
  });
});
