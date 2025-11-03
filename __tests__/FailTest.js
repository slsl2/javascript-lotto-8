import { describe, test, expect } from '@jest/globals';
import { fail } from '../src/utils/Fail.js';

describe('fail 함수', () => {
  test('에러 메시지가 [ERROR] 형식으로 출력되는지 테스트', () => {
    expect(() => fail('로또 구입 금액은 1,000원 단위로만 입력 가능합니다.')).toThrow(
      '[ERROR] 로또 구입 금액은 1,000원 단위로만 입력 가능합니다.',
    );
  });
});
