import React from 'react';

function PassengersView({
  data,
  isLoading,
  isSuccess,
  error
}) {
  return (
    <div>
      {isSuccess && (
        data.data.map((passenger) => (
          <div key={passenger._id}>
            <p>{passenger.name}</p>
            <p>{passenger._id}</p>
          </div>
        )))}
      {isLoading && (
        <p>Loading...</p>
      )}
      {error && (
        <p>{error}</p>
      )}
    </div>
  )
}

export default PassengersView;