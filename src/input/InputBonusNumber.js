import { Console } from '@woowacourse/mission-utils';
import { validateBonusNumber } from '../utils/ValidateBonusNumber';

export async function inputBonusNumber(winningNumbers) {
  const bonusNumberInput = await Console.readLineAsync();
  const bonusNumber = validateBonusNumber(bonusNumberInput, winningNumbers);
  return bonusNumber;
}
