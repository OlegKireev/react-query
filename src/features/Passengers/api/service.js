export const fetchPassengers = async () => {
  const endpoint = `https://api.instantwebtools.net/v1/passenger?page=0&size=10`;
  const response = await fetch(endpoint);
  return response.json();
}