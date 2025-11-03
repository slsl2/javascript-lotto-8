import { describe, test, expect, jest, beforeEach } from '@jest/globals';
import { validateBonusNumber } from '../src/utils/ValidateBonusNumber.js';
import { fail } from '../src/utils/Fail.js';

jest.mock('../src/utils/Fail', () => ({
  fail: jest.fn(),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

describe('validateBonusNumber', () => {
  const winningNumbers = [1, 2, 5, 7, 10, 14];
  test('1~45 범위 외의 숫자일 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateBonusNumber('894', winningNumbers)).toThrow();
    expect(fail).toHaveBeenCalledWith('보너스 번호는 1~45 내의 숫자만 가능합니다.');
  });

  test('당첨 번호와 중복될 경우 테스트', () => {
    fail.mockImplementation(() => {
      throw new Error();
    });

    expect(() => validateBonusNumber('5', winningNumbers)).toThrow();
    expect(fail).toHaveBeenCalledWith('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  });

  test('정상 입력 테스트', () => {
    const result = validateBonusNumber('28', winningNumbers);
    expect(result).toBe(28);
  });
});
