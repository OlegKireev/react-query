import React from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import Pagination from '../../components/Pagination';
import Preloader from '../../components/Preloader';
import PassengerList from './components/PassengerList';

function PassengersView({
  data,
  isLoading,
  isSuccess,
  error,
  page,
  totalPages,
  onPageChange,
}) {
  return (
    <>
      {isSuccess && (
        <PassengerList
          data={data.data}
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}

      <Pagination
        page={page}
        total={totalPages}
        onPageChange={onPageChange}
      />

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