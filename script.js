// Import the necessary testing libraries or frameworks
const assert = require('assert');

// Import the modules or functions to be tested
const { add, multiply } = require('./math');

// Write test cases
describe('Math Functions', () => {
  it('should add two numbers correctly', () => {
    assert.strictEqual(add(2, 3), 5);
    assert.strictEqual(add(-1, 5), 4);
    assert.strictEqual(add(0, 0), 0);
  });

  it('should multiply two numbers correctly', () => {
    assert.strictEqual(multiply(2, 3), 6);
    assert.strictEqual(multiply(-1, 5), -5);
    assert.strictEqual(multiply(0, 10), 0);
  });
});

// Run the tests