import { Console } from '@woowacourse/mission-utils';
import { validatelottoNumber } from '../utils/ValidateLottoNumber';
import { fail } from '../utils/Fail';

export async function inputBonusNumber(winningNumbers) {
  const bonusNumberInput = await Console.readLineAsync();
  const bonusNumber = validatelottoNumber(bonusNumberInput);

  if (winningNumbers.includes(bonusNumber)) {
    fail('보너스 번호는 당첨 번호와 중복될 수 없습니다.');
  }

  return bonusNumber;
}
