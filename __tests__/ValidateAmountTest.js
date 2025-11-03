import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { validateAmount } from '../src/utils/ValidateAmount.js';
import { fail } from '../src/utils/Fail.js';

jest.mock('../src/utils/Fail', () => ({
  fail: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validateAmount', () => {
  test('입력된 금액이 1,000원 단위가 아닐 때 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateAmount(2002)).toThrow();
    expect(fail).toHaveBeenCalledWith('로또 구입 금액은 1,000원 단위로만 입력 가능합니다.');
  });

  test('정상 입력 테스트', () => {
    const result = validateAmount(15000);
    expect(result).toBe(15000);
  });
});
