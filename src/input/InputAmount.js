import { Console } from '@woowacourse/mission-utils';

export async function inputAmount() {
  const amount = await Console.readLineAsync();
  return amount;
}
