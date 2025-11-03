import { Console } from '@woowacourse/mission-utils';

export async function inputWinningNumbers() {
  const winningNumbersInput = await Console.readLineAsync();
  return winningNumbersInput;
}
