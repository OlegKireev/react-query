import axios from "axios";
import { useMutation } from "react-query";

function useAddPassengerMutation() {
  return useMutation((passengerData) => axios
    .post("https://api.instantwebtools.net/v1/passenger/", passengerData)
  )
}

export default useAddPassengerMutation;