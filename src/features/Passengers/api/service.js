import api from '../../../api';

export const fetchPassengers = ({ page }) => async () => {
  const endpoint = `passenger?page=${page}&size=10`;
  return api.get(endpoint);
  // const response = await fetch(endpoint);
  // return response.json();
}