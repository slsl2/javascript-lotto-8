import { fail } from './utils/Fail.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (!Array.isArray(numbers) || numbers.length !== 6) {
      fail('로또 번호는 6개여야 합니다.');
    }
    if (!numbers.every((n) => Number.isInteger(n) && n >= 1 && n <= 45)) {
      fail('로또 번호는 1부터 45 사이의 정수여야 합니다.');
    }
    if (new Set(numbers).size !== 6) {
      fail('로또 번호는 중복될 수 없습니다.');
    }
  }

  getNumbers() {
    return [...this.#numbers];
  }
}

export default Lotto;
