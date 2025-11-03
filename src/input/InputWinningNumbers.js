import { Console } from '@woowacourse/mission-utils';

export async function inputWinningNumbers() {
  const winningNumbers = await Console.readLineAsync();
  return winningNumbers;
}
