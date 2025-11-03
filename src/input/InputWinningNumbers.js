import { Console } from '@woowacourse/mission-utils';

export async function inputWinningNumbers() {
  const winningNumbersInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
  return winningNumbersInput;
}
