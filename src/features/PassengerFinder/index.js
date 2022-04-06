import React, { useState } from 'react';
import usePassengerQuery from './api/usePassengerQuery';
import View from './view';

function PassengerFinder() {
  const [passengerId, setPassengerId] = useState('');
  const { data, isLoading, isSuccess, error } = usePassengerQuery(passengerId);

  return (
    <View
      data={data}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
      setPassengerId={setPassengerId}
    />
  )
}

export default PassengerFinder;