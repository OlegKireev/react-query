import React from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import Preloader from '../../components/Preloader';
import FindPassengerForm from './components/FindPassengerForm';

function PassengerFinderView({
  data,
  isLoading,
  isSuccess,
  error,
  setPassengerId,
}) {
  return (
    <>
      <h2>Find passenger by ID:</h2>

      <FindPassengerForm
        setPassengerId={setPassengerId}
      />

      {isSuccess && (
        <p>{data.name}</p>
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

export default PassengerFinderView;