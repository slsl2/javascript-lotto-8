# javascript-lotto-precourse

## 애플리케이션 개요

- 숫자 범위 1~45 내에서 진행되는 로또.

- 먼저 1,000원 단위의 금액을 입력.

- 해당 금액에 해당하는 만큼의 개수의 로또가 랜덤으로 생성되어 출력된다.

- 그 다음 당첨 번호 6개와 보너스 번호 1개를 입력.

- 1등부터 5등까지 당첨 가능.

- 당첨 결과와 총 수익률을 계산해서 결과를 출력한다.

- 에러 발생 시 "[ERROR]"로 시작하는 메시지를 출력하며 애플리케이션이 종료된다.

## 파일 구조

```bash
__📁tests__/
├── 🧪기능별 단위 테스트 파일들
📁src/
├── 🚀App.js
├── 🚀index.js
├── 🎰Lotto.js
├── 📁input/
│ ├── InputAmount.js
│ ├── InputBonusNumber.js
│ └── InputWinningNumbers.js
├── 📁print/
│ ├── CalculateRate.js
│ ├── CalculateResult.js
│ ├── CreateLottos.js
│ ├── CreateRandomNumbers.js
│ └── GetRank.js
├── 📁service/
│ ├── PrintPurchasedLottos.js
│ └── PrintStatistics.js
├── 📁utils/
│ ├── Fail.js
│ ├── SplitWinningNumbers.js
│ ├── ValidateAmount.js
│ ├── ValidateBonusNumber.js
│ └── ValidateIntNumber.js
```

## 단위 별 테스트 코드 파일

- [x] ValidateAmountTest.js

- [x] ValidateIntNumberTest.js

- [x] ValidateBonusNumberTest.js

- [x] SplitWinningNumbersTest.js

- [x] CreateLottosTest.js

- [x] CalculateRateTest.js

- [x] CalculateResultTest.js

- [x] GetRankTest.js

- [x] FailTest.js

## 과제 체크 리스트

### 프로젝트 세팅

- [x] fork & clone

- [x] README.md에 요구 사항 리스트 정리

### 기능 목록

- [x] 로또 구입 금액 입력 받기

- [x] 당첨 번호 입력 받기

- [x] 당첨 번호 쉼표를 기준으로 구분해 배열로 만들기

- [x] 보너스 번호 입력 받기

- [x] 재사용 가능한 숫자 예외 처리 함수 만들기

- [x] 금액 예외 처리: 1000원으로 나누어 떨어지지 않는 경우

- [x] 로또 번호 예외 처리: 숫자가 범위를 벗어날 경우 (1~45 정수)

- [x] 당첨 번호 입력값 예외 처리: 번호가 6개가 아닐 경우, 번호가 중복되는 경우

- [x] 보너스 번호 예외 처리: 당첨 번호(6개)와 중복되는 경우

- [x] 구입 금액에 해당하는 만큼 로또 발행 (1장=1000원)

- [x] 당첨 계산
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

- [x] 수익률 계산

- [x] 로또 수량 및 번호 출력: "\_개를 구매했습니다." ...

- [x] 당첨 내역 출력: "3개 일치 (5,000원) - \_개" ...

- [x] 수익률 출력: "총 수익률은 \_%입니다." (소수점 둘때 자리에서 반올림)

- [x] 에러 처리: "[ERROR]"로 시작하는 메시지 출력과 함께 에러 발생, 애플리케이션 종료

### 프로그래밍 요구 사항

- [x] Node.js 22.19.0 버전에서 실행 가능해야 한다

- [x] 시작점은 App.js의 run()

- [x] package.json 파일은 변경할 수 없으며, 제공된 라이브러리와 스타일 라이브러리 이외의 외부 라이브러리는 사용하지 않는다

- [x] 프로그램 종료 시 process.exit()를 호출하지 않는다

- [x] 파일, 패키지 등의 이름을 바꾸거나 이동하지 않는다

- [x] indent(들여쓰기) depth 최대 2로 구현

- [x] 3항 연산자 사용 X

- [x] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들기

- [x] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인

- [x] 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현

- [x] else 지양

- [x] 구현한 기능에 대한 단위 테스트 작성. 단 UI(System.out, System.in, Scanner) 로직은 제외

- [x] 제공된 Lotto 클래스를 사용하여 구현

- [x] Lotto에 numbers 이외의 필드(인스턴스 변수)를 추가할 수 없다

- [x] numbers의 접근 제어자인 #은 변경할 수 없다

- [x] Lotto의 패키지를 변경할 수 있다
