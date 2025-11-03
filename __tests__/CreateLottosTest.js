import { describe, test, expect } from '@jest/globals';
import { createLottos } from '../src/service/CreateLottos.js';

describe('createLottos', () => {
  test('금액만큼 로또 객체가 생성되는지 테스트', () => {
    const amount = 3000;
    const lottos = createLottos(amount);
    expect(lottos.length).toBe(3);
  });
});
