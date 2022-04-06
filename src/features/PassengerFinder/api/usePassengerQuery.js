import { useQuery } from "react-query";

function usePassengerQuery(id) {
  const endpoint = `https://api.instantwebtools.net/v1/passenger/${id}`;

  return useQuery(
    ['passenger', id],
    async () => {
      const response = await fetch(endpoint);
      return response.json();
    }, {
    enabled: Boolean(id),
  }
  )
}

export default usePassengerQuery;