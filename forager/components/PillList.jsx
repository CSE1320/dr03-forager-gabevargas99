import React from 'react';
import Pill from './Pill';
import styles from './PillList.module.css';

export default function PillList({ title, pills, onPillToggle }) {
  return (
    <div className={styles.pillList}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.pillContainer}>
        {pills.map((pill, index) => (
          <Pill
            key={index}
            label={pill.label}
            variant={pill.variant}
            onClick={() => onPillToggle(pill.label)}
          />
        ))}
      </div>
    </div>
  );
}