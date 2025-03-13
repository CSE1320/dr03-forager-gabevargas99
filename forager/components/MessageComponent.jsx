'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MessageComponent.module.css';

export default function MessageComponent({ onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose(); 
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>ATTENTION!</h2>
        <button className={styles.closeButton} onClick={handleClose}>
          <Image src="/icons/x.svg" alt="Close" width={24} height={24} />
        </button>
      </div>
      <p className={styles.message}>
        Our system can make mistakes! Remember to verify important information and use your own judgment to determine if any mushroom is safe. Be sure to use the "Report Error" button if you suspect a mistake.
      </p>
    </div>
  );
}