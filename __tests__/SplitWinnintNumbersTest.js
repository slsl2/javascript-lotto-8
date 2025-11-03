import { describe, test, expect } from '@jest/globals';
import { splitWinningNumbers } from '../src/utils/SplitWinningNumbers.js';

describe('splitWinningNumbers', () => {
  test('문자열-배열 변환 테스트', () => {
    const result = splitWinningNumbers('2,7,14,5,1,10');
    expect(result).toEqual([2, 7, 14, 5, 1, 10]);
  });
});
