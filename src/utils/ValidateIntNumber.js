import { fail } from './Fail.js';

export function validateIntNumber(input, errorMessagePrefix = '입력값') {
  if (input === '') {
    fail(`${errorMessagePrefix}이(가) 입력되지 않았습니다.`);
  }
  const value = Number(input);
  if (Number.isNaN(value)) {
    fail(`${errorMessagePrefix}은(는) 숫자만 입력 가능합니다.`);
  }
  if (!Number.isInteger(value) || value <= 0) {
    fail(`${errorMessagePrefix}은(는) 양의 정수여야 합니다.`);
  }
  return value;
}
