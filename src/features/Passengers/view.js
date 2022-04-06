import React from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import Preloader from '../../components/Preloader';
import PassengerList from './components/PassengerList';

function PassengersView({
  data,
  isLoading,
  isSuccess,
  error
}) {
  return (
    <>
      {isSuccess && (
        <PassengerList
          data={data.data}
        />
      )}

      {isLoading && (
        <Preloader />
      )}
      {error && (
        <ErrorMessage>{error}</ErrorMessage>
      )}
    </>
  )
}

export default PassengersView;