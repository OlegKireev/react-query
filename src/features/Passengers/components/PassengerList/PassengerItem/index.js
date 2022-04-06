import React from 'react';
import styles from './styles.module.css';

function PassengerItem({
  data
}) {
  const { _id: id, name } = data;

  return (
    <li
      key={id}
      className={styles.wrapper}
    >
      <span className={styles.name}>{name}</span>
      <span className={styles.id}>{id}</span>
    </li>
  )
}

export default PassengerItem;