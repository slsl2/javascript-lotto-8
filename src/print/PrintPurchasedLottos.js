import { Console } from '@woowacourse/mission-utils';

export function printPurchasedLottos(lottos) {
  Console.print(`${lottos.length}개를 구매했습니다.`);
  lottos.forEach((lotto) => {
    Console.print(`[${lotto.join(', ')}]`);
  });
  Console.print('');
}
