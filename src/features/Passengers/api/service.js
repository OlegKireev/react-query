export const fetchPassengers = ({ page }) => async () => {
  const endpoint = `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`;
  const response = await fetch(endpoint);
  return response.json();
}