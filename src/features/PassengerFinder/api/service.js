import api from "../../../api";

export const fetchPassengerById = (id) => async () => {
  const endpoint = `https://api.instantwebtools.net/v1/passenger/${id}`;
  return api.get(endpoint);
}