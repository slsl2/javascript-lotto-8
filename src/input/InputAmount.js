import { Console } from '@woowacourse/mission-utils';
import { validateAmount } from '../utils/ValidateAmount';

export async function inputAmount() {
  const amountInput = await Console.readLineAsync();
  const amount = validateAmount(amountInput);
  return amount;
}
