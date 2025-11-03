const PRIZE = {
  3: 5_000, // 5등
  4: 50_000, // 4등
  5: 1_500_000, // 3등
  '5b': 30_000_000, // 2등
  6: 2_000_000_000, // 1등
};

export function calculateRate(result, amount) {
  const totalPrize =
    result[3] * PRIZE[3] +
    result[4] * PRIZE[4] +
    result[5] * PRIZE[5] +
    result['5b'] * PRIZE['5b'] +
    result[6] * PRIZE[6];

  const rate = (totalPrize / amount) * 100;
  return Math.round(rate * 10) / 10;
}
