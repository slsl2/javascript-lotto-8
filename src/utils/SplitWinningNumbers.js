import Lotto from '../Lotto';

export function splitWinningNumbers(winningNumbersInput) {
  const parts = winningNumbersInput.split(',').map((s) => s.trim());
  const nums = parts.map((p) => Number(p));
  const lotto = new Lotto(nums);
  return lotto.getNumbers();
}
