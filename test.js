import { expect } from 'chai';
import calculateSquare from './index.mjs';

describe('calculateSquare', () => {
  it('should return the square of a given number', () => {
    const number = 5;
    const result = calculateSquare(number);
    expect(result).to.equal(25);
  });

  it('should return 0 for an input of 0', () => {
    const number = 0;
    const result = calculateSquare(number);
    expect(result).to.equal(0);
  });

  it('should handle negative numbers correctly', () => {
    const number = -3;
    const result = calculateSquare(number);
    expect(result).to.equal(9);
  });

  it('should return NaN for non-numeric input', () => {
    const number = 'a';
    const result = calculateSquare(number);
    expect(result).to.be.NaN;
  });
});
