import { fail } from './Fail.js';
import { validateIntNumber } from './ValidateIntNumber.js';

export function validateBonusNumber(number, winningNumbers) {
  const bonusNumber = validateIntNumber(number, '보너스 번호');

  if (bonusNumber < 1 || bonusNumber > 45) {
    fail('보너스 번호는 1~45 내의 숫자만 가능합니다.');
  }
  if (winningNumbers.includes(bonusNumber)) {
    fail('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }

  return bonusNumber;
}
