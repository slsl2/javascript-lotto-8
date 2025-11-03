import { describe, test, expect } from '@jest/globals';
import { calculateResult } from '../src/service/CalculateResult.js';
import Lotto from '../src/Lotto.js';

describe('calculateResult', () => {
  test('당첨 결과 계산 테스트', () => {
    const rawLottos = [
      [1, 2, 3, 8, 9, 10], // → 3개 일치 (5등)
      [11, 12, 13, 14, 15, 16], // → 0개 일치
      [1, 11, 12, 13, 14, 15], // → 1개 일치
      [1, 2, 3, 4, 8, 9], // → 4개 일치 (4등)
      [2, 3, 4, 8, 9, 10], // → 3개 일치 (5등)
      [4, 5, 6, 41, 42, 43], // → 3개 일치 (5등)
      [2, 3, 4, 5, 6, 7], // → 5개 일치 + 보너스 (2등)
      [5, 6, 7, 8, 9, 10], // → 2개 일치
    ];

    const lottos = rawLottos.map((nums) => new Lotto(nums));

    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    const result = calculateResult(lottos, winningNumbers, bonusNumber);

    expect(result).toEqual({
      3: 3, // 3개 일치 (5등) 3장
      4: 1, // 4개 일치 (4등) 1장
      5: 0,
      '5b': 1, // 5개 일치 + 보너스 번호 일치 (2등) 1장
      6: 0,
    });
  });
});
