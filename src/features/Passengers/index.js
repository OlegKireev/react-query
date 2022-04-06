import React, { useState } from 'react';
import usePassengersQuery from './api/usePassengersQuery';
import View from './view';

function Passengers() {
  const [page, setPage] = useState(0);
  const { data: { data } = [], isLoading, isSuccess, error } = usePassengersQuery(page);

  return (
    <View
      data={data}
      isLoading={isLoading}
      isSuccess={isSuccess}
      error={error}
      page={page}
      totalPages={data?.totalPages || 0}
      onPageChange={setPage}
    />
  )
}

export default Passengers;