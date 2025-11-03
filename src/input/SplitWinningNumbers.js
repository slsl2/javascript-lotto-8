export function SplitWinningNumbers(winningNumbersInput) {
  const winningNumbers = winningNumbersInput.split(',').map((number) => number.trim());
  // winningNumbers.forEach();
  return winningNumbers;
}
