export function getDiscount(total) {
  if (total < 1000) return 0;
  if (total < 2000) return 5;
  if (total < 5000) return 10;
  return 20;
}