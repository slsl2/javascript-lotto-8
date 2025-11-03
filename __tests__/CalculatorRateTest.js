import { describe, test, expect } from '@jest/globals';
import { calculateRate } from '../src/service/CalculateRate.js';

describe('calculateRate', () => {
  test('당첨이 없는 경우 테스트 -> 0', () => {
    const result = { 3: 0, 4: 0, 5: 0, '5b': 0, 6: 0 };
    expect(calculateRate(result, 8000)).toBe(0);
  });

  test('5등+4등, 금액 2000원 → 2750.0%', () => {
    const result = { 3: 1, 4: 1, 5: 0, '5b': 0, 6: 0 };
    // (5000 + 50000) / 2000 * 100 = 2,750 → 2750.0
    expect(calculateRate(result, 2000)).toBe(2750.0);
  });

  test('반내림 테스트: 총상금 5000원, 금액 15000원 → 33.3%', () => {
    const result = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    // 5000 / 15000 * 100 = 33.333... → 33.3
    expect(calculateRate(result, 15000)).toBe(33.3);
  });

  test('반올림 테스트: 총상금 5000원, 금액 9000원 → 55.6%', () => {
    const result = { 3: 1, 4: 0, 5: 0, '5b': 0, 6: 0 };
    // 5000 / 9000 * 100 = 55.555... → 55.6
    expect(calculateRate(result, 9000)).toBe(55.6);
  });
});
