import { useQuery } from "react-query";
import { fetchPassengerById } from "./service";

function usePassengerQuery(id) {
  return useQuery(
    ['passenger', id],
    fetchPassengerById(id),
    { enabled: Boolean(id) }
  )
}

export default usePassengerQuery;