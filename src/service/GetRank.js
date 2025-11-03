export function getRank(lotto, winningNumbers, bonusNumber) {
  const nums = lotto.getNumbers();
  const match = nums.filter((n) => winningNumbers.includes(n)).length;

  if (match === 6) return 6;
  if (match === 5 && nums.includes(bonusNumber)) return '5b';
  if (match === 5) return 5;
  if (match === 4) return 4;
  if (match === 3) return 3;
  return null;
}
