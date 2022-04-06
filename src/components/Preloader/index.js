import React from 'react';
import styles from './styles.module.css';

function Preloader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner}>
        <div />
      </div>
    </div>
  )
}

export default Preloader;