import React from 'react';
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
            <li
              key={passenger._id}
              className={styles.listItem}
            >
              <span className={styles.passengerName}>{passenger.name}</span>
              <span className={styles.passengerId}>{passenger._id}</span>
            </li>
          )))}
      </ul>

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