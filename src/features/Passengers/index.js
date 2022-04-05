import React from 'react';
import usePassengersQuery from './api/usePassengersQuery';
import View from './view';

function Passengers() {
  const { data, isLoading, isSuccess, error } = usePassengersQuery();
  return (
    <View
      data={data}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
    />
  )
}

export default Passengers;