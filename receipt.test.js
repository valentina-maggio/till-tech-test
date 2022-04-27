const Receipt = require('./receipt');

describe('Receipt', () => {
  it('returns an instance of the Receipt class', () => {
    const receipt = new Receipt();

    expect(receipt).toBeInstanceOf(Receipt);
  });
});
