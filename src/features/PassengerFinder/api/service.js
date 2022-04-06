export const fetchPassengerById = (id) => async () => {
  const endpoint = `https://api.instantwebtools.net/v1/passenger/${id}`;

  const response = await fetch(endpoint);
  return response.json();
}