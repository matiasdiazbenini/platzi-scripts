const sum = require('../sum');
const assert = require('assert');

describe('Sum', () => {
  it('should handle two positive numbers', () => {
    assert.equal(sum(3, 5), 8);
  });

  it('should handle negative numbers', () => {
    assert.equal(sum(3, -5), -2);
  });

  it('should handle decimals', () => {
    assert.equal(sum(3.5, 7.1), 10.6);
  });

  it('should handle three numbers', () => {
    assert.equal(sum(3, 4, 8), 15);
  });

  it('should handle multiple numbers', () => {
    assert.equal(sum(1, 2, 3, 4, 5), 15);
  });
});