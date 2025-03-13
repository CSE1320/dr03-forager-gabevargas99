'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Pill from './Pill';
import styles from './FilterSettings.module.css';

export default function FilterSettings({ onClose }) {
  // State to manage selected pills
  const [selectedTags, setSelectedTags] = useState(['Favourites']);
  const [selectedRegions, setSelectedRegions] = useState(['Texas']);
  const [selectedCategories, setSelectedCategories] = useState(['Poisonous', 'Good for Broths']);

  // Toggle selection for pills
  const toggleSelection = (item, selectedItems, setSelectedItems) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const tags = ['Favourites', 'Recent'];
  const regions = ['Texas', 'North America', 'South America', 'Asia', 'Europe', 'Africa'];
  const categories = ['Poisonous', 'Medicinal', 'Mythical', 'Good for Broths'];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>FILTER</h2>
        <button className={styles.closeButton} onClick={onClose}>
          <Image src="/icons/x.svg" alt="Close" width={24} height={24} />
        </button>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Tags</h3>
        <div className={styles.pillContainer}>
          {tags.map((tag) => (
            <Pill
              key={tag}
              label={tag}
              variant={selectedTags.includes(tag) ? 'primary' : 'secondary'}
              onClick={() => toggleSelection(tag, selectedTags, setSelectedTags)}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Regions</h3>
        <div className={styles.pillContainer}>
          {regions.map((region) => (
            <Pill
              key={region}
              label={region}
              variant={selectedRegions.includes(region) ? 'primary' : 'secondary'}
              onClick={() => toggleSelection(region, selectedRegions, setSelectedRegions)}
            />
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Category</h3>
        <div className={styles.pillContainer}>
          {categories.map((category) => (
            <Pill
              key={category}
              label={category}
              variant={selectedCategories.includes(category) ? 'primary' : 'secondary'}
              onClick={() => toggleSelection(category, selectedCategories, setSelectedCategories)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}