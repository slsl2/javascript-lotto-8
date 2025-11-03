import { Console } from '@woowacourse/mission-utils';
import { validateAmount } from '../utils/ValidateAmount.js';

export async function inputAmount() {
  Console.print('구입금액을 입력해 주세요.');
  const amountInput = await Console.readLineAsync();
  return validateAmount(amountInput);
}
