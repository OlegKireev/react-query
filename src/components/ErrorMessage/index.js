import React from 'react';
import styles from './styles.module.css';

function ErrorMessage({ children }) {
  return (
    <p className={styles.message}>{`Error: ${children}`}</p>
  )
}

export default ErrorMessage;