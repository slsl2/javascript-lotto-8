import { Console } from '@woowacourse/mission-utils';
import { inputAmount } from './input/InputAmount';
import { createLottos } from './service/CreateLottos';
import { printPurchasedLottos } from './print/printPurchasedLottos';
import { inputWinningNumbers } from './input/InputWinningNumbers';
import { splitWinningNumbers } from './utils/SplitWinningNumbers';
import { inputBonusNumber } from './input/InputBonusNumber';
import { calculateResult } from './service/CalculateResult';
import { calculateRate } from './service/CalculateRate';
import { printStatistics } from './print/PrintStatistics';

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
    }
  }
}

export default App;
