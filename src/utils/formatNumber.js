export default function formatNumberWithPeriods(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
