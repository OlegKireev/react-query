import { useQuery } from "react-query";
import { fetchPassengers } from "./service";

function usePassengersQuery(page) {
  return useQuery(
    ['passengers', page],
    fetchPassengers({ page }),
  )
}

export default usePassengersQuery;