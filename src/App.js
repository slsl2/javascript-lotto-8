import { Console } from '@woowacourse/mission-utils';
import { inputAmount } from './input/InputAmount.js';
import { createLottos } from './service/CreateLottos.js';
import { printPurchasedLottos } from './print/PrintPurchasedLottos.js';
import { inputWinningNumbers } from './input/InputWinningNumbers.js';
import { splitWinningNumbers } from './utils/SplitWinningNumbers.js';
import { inputBonusNumber } from './input/InputBonusNumber.js';
import { calculateResult } from './service/CalculateResult.js';
import { calculateRate } from './service/CalculateRate.js';
import { printStatistics } from './print/PrintStatistics.js';

class App {
  async run() {
    try {
      const amount = await inputAmount();
      const lottos = createLottos(amount);
      printPurchasedLottos(lottos);
      const winningNumbersInput = await inputWinningNumbers();
      const winningNumbers = splitWinningNumbers(winningNumbersInput);
      const bonusNumber = await inputBonusNumber(winningNumbers);
      const result = calculateResult(lottos, winningNumbers, bonusNumber);
      const totalRate = calculateRate(result, amount);
      printStatistics(result, totalRate);
    } catch (error) {
      Console.print(error.message || '[ERROR] 알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.');
      // throw error;
    }
  }
}

export default App;
