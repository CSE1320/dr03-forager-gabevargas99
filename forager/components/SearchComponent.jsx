'use client';

import React from 'react';
import styles from './SearchComponent.module.css';

export default function SearchComponent({ onSearchChange, onClearSearch, searchTerm, onFilterClick }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for a mushroom"
        className={styles.searchInput}
        onChange={onSearchChange}
        value={searchTerm}
      />
      {searchTerm && (
        <button className={styles.clearButton} onClick={onClearSearch}>
          ×
        </button>
      )}
      <button className={styles.filterButton} onClick={onFilterClick}>
        ▼
      </button>
    </div>
  );
}