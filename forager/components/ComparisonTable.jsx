'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ComparisonTable.module.css';

export default function ComparisonTable() {
  const comparisonData = {
    yourPhoto: {
      image: '/images/image7.png',
      match: null,
      warning: false,
      characteristics: {
        'Cap Shape': 'Flat',
        'Cap Color': 'Brown',
        'Cap Texture': 'Smooth',
        'Gills Type': 'Free',
        'Gills Color': 'White',
        'Stem Shape': 'Slender',
        'Stem Color': 'White',
        'Stem Ring': 'Absent',
        'Habitat': '?',
      },
    },
    deathCap: {
      image: '/images/image8.png',
      match: '97%',
      warning: true,
      characteristics: {
        'Cap Shape': 'Flat',
        'Cap Color': 'Yellow',
        'Cap Texture': 'Smooth',
        'Gills Type': 'Free',
        'Gills Color': 'White',
        'Stem Shape': 'Slender',
        'Stem Color': 'White',
        'Stem Ring': 'Absent',
        'Habitat': 'Near oak/ beech',
      },
    },
  };

  const characteristicsKeys = Object.keys(comparisonData.yourPhoto.characteristics);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <Image src={comparisonData.yourPhoto.image} alt="Your Photo" width={138} height={180} />
          </div>
          <h2 className={styles.name}>Your Photo</h2>
        </div>
        <div className={styles.column}>
          <div className={styles.imageContainer}>
            <Image src={comparisonData.deathCap.image} alt="Death Cap" width={138} height={180} />
            <div className={`${styles.match} ${comparisonData.deathCap.warning ? styles.warning : ''}`}>
              <Image src="/images/skull.svg" alt="Match" width={20} height={20} />
              <span>{comparisonData.deathCap.match}</span>
              {comparisonData.deathCap.warning && (
                <Image
                  src="/images/famicons_warning-outline.svg"
                  alt="Warning"
                  width={20}
                  height={20}
                  className={styles.warningIcon}
                />
              )}
            </div>
          </div>
          <h2 className={styles.name}>Death Cap</h2>
        </div>
      </div>
      <div className={styles.characteristicsTable}>
        {characteristicsKeys.map((key, index) => (
          <div key={key} className={styles.characteristicRow}>
            <div className={styles.characteristic}>
              <Image src="/images/x.svg" alt="X" width={10} height={10} className={styles.matchIcon} />
              <span className={styles.label}>{key}</span>
            </div>
            <div className={styles.value}>{comparisonData.yourPhoto.characteristics[key]}</div>
            <div className={styles.value}>{comparisonData.deathCap.characteristics[key]}</div>
            {index < characteristicsKeys.length - 1 && (
              <div className={styles.horizontalLine}>
                <Image src="/images/Line1.svg" alt="Line" layout="fill" objectFit="cover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}