import Lotto from '../Lotto';
import { createRandomNumbers } from './CreateRandomNumbers';

export function createLottos(amount) {
  const count = amount / 1000;
  return Array.from({ length: count }, () => new Lotto(createRandomNumbers()));
}
