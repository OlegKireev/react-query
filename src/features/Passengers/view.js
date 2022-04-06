import React from 'react';
import ErrorMessage from '../../components/ErrorMessage';
import Preloader from '../../components/Preloader';
import PassengerItem from './components/PassengerItem';
import styles from './styles.module.css';

function PassengersView({
  data,
  isLoading,
  isSuccess,
  error
}) {
  return (
    <>
      <ul className={styles.list}>
        {isSuccess && (
          data.data.map((passenger) => (
            <PassengerItem
              key={passenger._id}
              data={passenger}
            />
          )))}
      </ul>

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