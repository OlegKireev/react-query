import React from 'react';
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
    <div>

      <ul className={styles.list}>
        {isSuccess && (
          data.data.map((passenger) => (
            <PassengerItem data={passenger} key={passenger._id} />
          )))}
      </ul>

      {!isLoading && (
        <Preloader />
      )}
      {error && (
        <p>{error}</p>
      )}
    </div>
  )
}

export default PassengersView;