import { Console } from '@woowacourse/mission-utils';
import { validateBonusNumber } from '../utils/ValidateBonusNumber.js';

export async function inputBonusNumber(winningNumbers) {
  const bonusNumberInput = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  return validateBonusNumber(bonusNumberInput, winningNumbers);
}
