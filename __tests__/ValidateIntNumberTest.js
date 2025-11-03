import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { validateIntNumber } from '../src/utils/ValidateIntNumber.js';
import { fail } from '../src/utils/Fail.js';

jest.mock('../src/utils/Fail', () => ({
  fail: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validateIntNumber', () => {
  test('빈 문자열일 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateIntNumber('', '로또 구입 금액')).toThrow();
    expect(fail).toHaveBeenCalledWith('로또 구입 금액이(가) 입력되지 않았습니다.');
  });

  test('숫자가 아닐 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateIntNumber('1000원', '로또 구입 금액')).toThrow();
    expect(fail).toHaveBeenCalledWith('로또 구입 금액은(는) 숫자만 입력 가능합니다.');
  });

  test('양수 정수가 아닐 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateIntNumber('0', '로또 구입 금액')).toThrow();
    expect(fail).toHaveBeenCalledWith('로또 구입 금액은(는) 양의 정수여야 합니다.');

    jest.clearAllMocks();
    fail.mockImplementation(() => {
      throw new Error();
    });
    expect(() => validateIntNumber('1900.04', '로또 구입 금액')).toThrow();
    expect(fail).toHaveBeenCalledWith('로또 구입 금액은(는) 양의 정수여야 합니다.');

    jest.clearAllMocks();
    fail.mockImplementation(() => {
      throw new Error();
    });
    expect(() => validateIntNumber('-11000', '로또 구입 금액')).toThrow();
    expect(fail).toHaveBeenCalledWith('로또 구입 금액은(는) 양의 정수여야 합니다.');
  });

  test('정상 입력 테스트', () => {
    const result = validateIntNumber('5000', '로또 구입 금액');
    expect(result).toBe(5000);
  });
});
