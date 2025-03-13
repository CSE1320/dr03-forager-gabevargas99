import React from 'react';
import styles from './Pill.module.css';

export default function Pill({ label, variant, onClick }) {
  return (
    <button
      className={`${styles.pill} ${variant === 'primary' ? styles.primary : styles.secondary}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}