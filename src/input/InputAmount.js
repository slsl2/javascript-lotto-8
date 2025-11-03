import { Console } from '@woowacourse/mission-utils';
import { validateAmount } from '../utils/ValidateAmount.js';

export async function inputAmount() {
  const amountInput = await Console.readLineAsync('구입금액을 입력해 주세요.\n');
  return validateAmount(amountInput);
}
