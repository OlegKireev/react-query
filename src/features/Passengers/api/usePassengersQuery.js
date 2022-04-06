import { useQuery } from "react-query";
import { fetchPassengers } from "./service";

function usePassengersQuery() {
  return useQuery(
    'passengers',
    fetchPassengers,
  )
}

export default usePassengersQuery;