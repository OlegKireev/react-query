import { useQuery } from "react-query";
const endpoint = `https://api.instantwebtools.net/v1/passenger?page=0&size=10`;

function usePassengersQuery() {
  return useQuery(
    'passengers',
    async () => {
      const response = await fetch(endpoint);
      return response.json();
    }
  )
}

export default usePassengersQuery;