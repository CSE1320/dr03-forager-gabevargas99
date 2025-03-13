'use client';

import React from 'react';
import Image from 'next/image';
import styles from './MushroomCard.module.css';

export default function MushroomCard({ card = true }) {
  return (
    <div className={styles.card}>
      {card && (
        <>
          <div className={styles.polaroid}>
            <Image src="/images/mushroom2.png" alt="Mushroom" width={294} height={400} />
          </div>
          <div className={styles.header}>
            <div className={styles.textContainer}>
              <h2>Death Cap</h2>
              <span className={styles.subtext}>Amanita phalloides</span>
            </div>
            <button className={styles.addButton}>
              <Image src="/images/add.svg" alt="Add" width={52} height={52} />
            </button>
          </div>
          <div className={styles.content}>
            <div className={styles.facts}>
              <h3>Fast Facts</h3>
              <p>Cap Diameter: 5-15cm</p>
              <p>Gill Color: White</p>
              <p>Stem Color: White</p>
              <p>Habitat: Temperate regions</p>
            </div>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
            </p>
          </div>
        </>
      )}
    </div>
  );
}