import { validatelottoNumber } from '../utils/ValidateLottoNumber';

export function SplitWinningNumbers(winningNumbersInput) {
  const winningNumbers = winningNumbersInput.split(',').map((number) => number.trim());
  winningNumbers.forEach(validatelottoNumber);
  return winningNumbers;
}
