import { fail } from './Fail.js';
import { validateIntNumber } from './ValidateIntNumber.js';

export function validateAmount(amountInput) {
  const amount = validateIntNumber(amountInput, '로또 구입 금액');

  if (amount % 1000 !== 0) {
    fail('로또 구입 금액은 1,000원 단위로만 입력 가능합니다.');
  }

  return amount;
}
