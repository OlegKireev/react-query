import api from '../../../api';
import { useMutation } from "react-query";;

function useAddPassengerMutation() {
  return useMutation((passengerData) => api
    .post("passenger", passengerData)
  )
}

export default useAddPassengerMutation;