import { getRank } from './getRank';

export function calculateResult(lottos, winningNumbers, bonusNumber) {
  const result = { 3: 0, 4: 0, 5: 0, '5b': 0, 6: 0 };

  lottos.forEach((lotto) => {
    const rank = getRank(lotto, winningNumbers, bonusNumber);
    if (rank !== null) {
      result[rank] += 1;
    }
  });

  return result;
}
