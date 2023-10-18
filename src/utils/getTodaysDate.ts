export function getTodaysDate() {
  return new Date().toISOString().split('T')[0];
}
