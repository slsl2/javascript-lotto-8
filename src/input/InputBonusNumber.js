import { Console } from '@woowacourse/mission-utils';

export async function inputBonusNumber() {
  const bonusNumberInput = await Console.readLineAsync();
  return bonusNumberInput;
}
