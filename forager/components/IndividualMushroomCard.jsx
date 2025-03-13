'use client';

import React from 'react';
import Image from 'next/image';
import styles from './IndividualMushroomCard.module.css';

export default function IndividualMushroomCard({ name, imageSrc, matchPercentage }) {
  return (
    <div className={styles.card}>
      <div className={styles.polaroid}>
        <Image src={imageSrc} alt={`${name} image`} width={165} height={200} /> {/* Adjusted width and height */}
        <div className={styles.confidenceIndicator}>
          <Image src="/images/icons/ic_round-warning.svg" alt={`${matchPercentage} match`} width={40} height={40} /> {/* Reduced size */}
        </div>
      </div>
      <div className={styles.text}>
        <h3>{name}</h3>
      </div>
    </div>
  );
}