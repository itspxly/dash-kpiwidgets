import pretifyNumber from '../src/ts/utils';

describe('pretifyNumber', () => {
  it('should return the number with the specified precision if it is less than 1000', () => {
    expect(pretifyNumber(123.456, 2)).toBe('123.46');
    expect(pretifyNumber(789, 0)).toBe('789');
  });

  it('should return the abbreviated number with the specified precision if it is greater than or equal to 1000', () => {
    expect(pretifyNumber(1234567, 2)).toBe('1.23M');
    expect(pretifyNumber(9876543210, 3)).toBe('9.877B');
  });

  it('should use default precision of 1 if precision is not provided', () => {
    expect(pretifyNumber(123456789)).toBe('123.5M');
    expect(pretifyNumber(9876543210)).toBe('9.9B');
  });

  it('should return the number with the specified precision if it is less than 1000 and precision is negative', () => {
    expect(pretifyNumber(123.456, -2)).toBe('123');
    expect(pretifyNumber(789, -1)).toBe('789');
  });

  it('should return the abbreviated number with the specified precision if it is greater than or equal to 1000 and precision is negative', () => {
    expect(pretifyNumber(1234567, -2)).toBe('1M');
    expect(pretifyNumber(9876543210, -3)).toBe('10B');
  });

  it('should return the number with the specified precision if it is less than 1000 and precision is zero', () => {
    expect(pretifyNumber(123.456, 0)).toBe('123');
    expect(pretifyNumber(789, 0)).toBe('789');
  });

  it('should return the abbreviated number with the specified precision if it is greater than or equal to 1000 and precision is zero', () => {
    expect(pretifyNumber(1234567, 0)).toBe('1M');
    expect(pretifyNumber(9876543210, 0)).toBe('10B');
  });

  it('should return the number with the specified precision if it is less than 1000 and precision is greater than the number of decimal places', () => {
    expect(pretifyNumber(123.456, 4)).toBe('123.4560');
    expect(pretifyNumber(789, 3)).toBe('789.000');
  });

  it('should return the abbreviated number with the specified precision if it is greater than or equal to 1000 and precision is greater than the number of decimal places', () => {
    expect(pretifyNumber(1234567, 4)).toBe('1.2346M');
    expect(pretifyNumber(9876543210, 5)).toBe('9.87654B');
  });

  it('should return the number with the specified precision if it is less than 1000 and precision is greater than the number of decimal places and precision is negative', () => {
    expect(pretifyNumber(123.456, -4)).toBe('123');
    expect(pretifyNumber(789, -3)).toBe('789');
  });

  it('should return the abbreviated number with the specified precision if it is greater than or equal to 1000 and precision is greater than the number of decimal places and precision is negative', () => {
    expect(pretifyNumber(1234567, -4)).toBe('1M');
    expect(pretifyNumber(-9876543210, -5)).toBe('-10B');
  });

  it('should return T', () => {
    expect(pretifyNumber(-1234567, -4)).toBe('-1M');
    expect(pretifyNumber(9876543210000)).toBe('9.9T');
  });

  it('should return T and Large Number', () => {
    expect(pretifyNumber(-98765432100005555, -4)).toBe('-98765T');
    expect(pretifyNumber(98765432100005555)).toBe('98765.4T');
  });
});




