import { describe, test, expect } from '@jest/globals';
import { getRank } from '../src/service/GetRank.js';

describe('getRank', () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];
  const bonusNumber = 7;

  test('6개 일치 → 1등(6)', () => {
    expect(getRank({ getNumbers: () => [1, 2, 3, 4, 5, 6] }, winningNumbers, bonusNumber)).toBe(6);
  });

  test("5개+보너스 일치 → 2등('5b')", () => {
    expect(getRank({ getNumbers: () => [1, 2, 3, 4, 5, 7] }, winningNumbers, bonusNumber)).toBe(
      '5b',
    );
  });

  test('5개 일치 → 3등(5)', () => {
    expect(getRank({ getNumbers: () => [1, 2, 3, 4, 5, 10] }, winningNumbers, bonusNumber)).toBe(5);
  });

  test('4개 일치 → 4등(4)', () => {
    expect(getRank({ getNumbers: () => [1, 2, 3, 4, 9, 10] }, winningNumbers, bonusNumber)).toBe(4);
  });

  test('3개 일치 → 5등(3)', () => {
    expect(getRank({ getNumbers: () => [1, 2, 3, 9, 10, 11] }, winningNumbers, bonusNumber)).toBe(
      3,
    );
  });

  test('2개 이하 → null', () => {
    expect(
      getRank({ getNumbers: () => [1, 9, 10, 11, 12, 13] }, winningNumbers, bonusNumber),
    ).toBeNull();
  });
});
