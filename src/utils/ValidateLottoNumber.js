import { fail } from './Fail.js';
import { validateIntNumber } from './ValidateIntNumber.js';

export function validatelottoNumber(number) {
  const lottoNumber = validateIntNumber(number, '로또 번호');

  if (lottoNumber) {
    fail('로또 번호는 1~45 내의 숫자만 가능합니다.');
  }

  return lottoNumber;
}
