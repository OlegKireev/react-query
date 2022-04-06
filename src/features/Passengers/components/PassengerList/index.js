import React from 'react';
import PassengerItem from './PassengerItem';
import styles from './styles.module.css';

function PassengerList({
  data,
}) {
  return (
    <ul className={styles.wrapper}>
      {data.map((passenger) => (
        <PassengerItem
          key={passenger._id}
          data={passenger}
        />
      ))}
    </ul>
  )
}

export default PassengerList;