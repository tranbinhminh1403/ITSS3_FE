export default function handleDate(date) {
  const originalDate = new Date(date);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString('en-US', options);
  return formattedDate;
}
