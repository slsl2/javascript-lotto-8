import { Console } from '@woowacourse/mission-utils';

export async function inputWinningNumbers() {
  Console.print('당첨 번호를 입력해 주세요.');
  const winningNumbersInput = await Console.readLineAsync();
  return winningNumbersInput;
}
