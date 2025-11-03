import { Random } from '@woowacourse/mission-utils';

export function createRandomNumbers() {
  const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  return randomNumbers;
}
