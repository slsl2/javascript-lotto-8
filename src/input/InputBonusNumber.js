import { Console } from '@woowacourse/mission-utils';
import { validateBonusNumber } from '../utils/ValidateBonusNumber.js';

export async function inputBonusNumber(winningNumbers) {
  Console.print('보너스 번호를 입력해 주세요.');
  const bonusNumberInput = await Console.readLineAsync();
  return validateBonusNumber(bonusNumberInput, winningNumbers);
}
