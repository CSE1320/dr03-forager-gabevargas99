'use client';

import React from 'react';
import Image from 'next/image';
import styles from './MushroomList.module.css';

export default function MushroomList() {
  const mushrooms = [
    { name: 'Paddy Straw', image: '/images/image3.png', percentage: '90%', warning: false },
    { name: 'Destroying Angel', image: '/images/image4.png', percentage: '80%', warning: true },
    { name: 'False Death Cap', image: '/images/image5.png', percentage: '70%', warning: true },
    { name: 'Puffball', image: '/images/image6.png', percentage: '60%', warning: false },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Similar Matches</h1>
      <div className={styles.grid}>
        {mushrooms.map((mushroom, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <Image src={mushroom.image} alt={mushroom.name} width={138} height={180} />
              <div className={`${styles.percentage} ${mushroom.warning ? styles.warning : styles.safe}`}>
                <span>{mushroom.percentage}</span>
                {mushroom.warning && (
                  <Image
                    src="/images/ic_round-warning.svg"
                    alt="Warning"
                    width={20}
                    height={20}
                    className={styles.warningIcon}
                  />
                )}
              </div>
            </div>
            <h2 className={styles.name}>{mushroom.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}