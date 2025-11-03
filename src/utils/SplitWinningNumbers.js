import { fail } from './Fail';
import { validateLottoNumber } from './ValidateLottoNumber';

export function splitWinningNumbers(winningNumbersInput) {
  const parts = winningNumbersInput.split(',').map((number) => number.trim());
  if (parts.length !== 6) {
    fail('당첨 번호는 6개여야 합니다.');
  }
  const winningNumbers = parts.map((p) => validateLottoNumber(p));
  if (new Set(winningNumbers).size !== 6) {
    fail('당첨 번호는 중복될 수 없습니다.');
  }
  return winningNumbers;
}
