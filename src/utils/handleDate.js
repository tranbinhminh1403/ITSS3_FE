export const handleDate = (date) => {
  const originalDate = new Date(date);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = originalDate.toLocaleDateString('en-US', options);
  return formattedDate;
};

export const calculateDayRemaining = (expired_at) => {
  const currentDate = new Date();

  const expirationDate = new Date(expired_at);

  // Calculate the difference in milliseconds between the two dates
  const differenceMs = expirationDate - currentDate;

  // Convert milliseconds to days
  const daysRemaining = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));

  return daysRemaining;
};
