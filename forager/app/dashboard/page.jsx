'use client';

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import SearchComponent from '../../components/SearchComponent';
import PillList from '../../components/PillList';
import FilterSettings from '../../components/FilterSettings';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const collectionData = [
  { id: 1, name: 'Death Cap', image: '/images/image7.png', warning: true, tags: ['Favourites'], region: 'Texas', category: 'Poisonous' },
  { id: 2, name: 'Paddy Straw', image: '/images/image3.png', warning: false, tags: [], region: 'Asia', category: 'Edible' },
  { id: 3, name: 'Destroying Angel', image: '/images/image1.png', warning: true, tags: [], region: 'North America', category: 'Poisonous' },
  { id: 4, name: 'False Death Cap', image: '/images/image5.png', warning: false, tags: ['Favourites'], region: 'Texas', category: 'Edible' },
  { id: 5, name: 'Puffball', image: '/images/image6.png', warning: false, tags: [], region: 'Europe', category: 'Edible' },
];

export default function DashboardPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([...collectionData]);
  const [error, setError] = useState(null);

  // search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // search input
  const handleClearSearch = () => {
    setSearchTerm('');
  };

  // toggle pill selection
  const handlePillToggle = (label) => {
    if (label === 'Texas') {
      setSelectedRegions((prev) =>
        prev.includes(label) ? prev.filter((r) => r !== label) : [...prev, label]
      );
    } else if (label === 'Favourites') {
      setSelectedTags((prev) =>
        prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]
      );
    }
  };

  // filter data based on search term and filter selections
  useEffect(() => {
    try {
      console.log('Filtering with:', { searchTerm, selectedTags, selectedRegions, selectedCategories });
      let result = [...collectionData];

      // Filter by search term
      if (searchTerm) {
        result = result.filter((mushroom) =>
          mushroom.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // filter by tags
      if (selectedTags.length > 0) {
        result = result.filter((mushroom) =>
          selectedTags.some((tag) => mushroom.tags.includes(tag))
        );
      }

      // filter by regions
      if (selectedRegions.length > 0) {
        result = result.filter((mushroom) =>
          selectedRegions.includes(mushroom.region)
        );
      }

      // filter by categories
      if (selectedCategories.length > 0) {
        result = result.filter((mushroom) =>
          selectedCategories.includes(mushroom.category)
        );
      }

      console.log('Filtered result:', result);
      setFilteredData(result);
    } catch (err) {
      setError(`Filtering error: ${err.message}`);
      console.error('Filtering error:', err);
    }
  }, [searchTerm, selectedTags, selectedRegions, selectedCategories]);

  const pillData = [
    { label: 'Texas', variant: selectedRegions.includes('Texas') ? 'primary' : 'secondary' },
    { label: 'Favourites', variant: selectedTags.includes('Favourites') ? 'primary' : 'secondary' },
  ];

  if (error) {
    return (
      <div className={styles.error}>
        Error: {error}. Please check the console for details and ensure all images are in /public/images.
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Image
        src="/images/placeholder.png"
        alt="Background Mushroom"
        width={375}
        height={667}
        className={styles.backgroundImage}
        style={{ position: 'absolute', objectFit: 'cover' }}
        onError={() => setError('Background image failed to load')}
      />
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.greeting}>Hi, Chantelle!</h1>
        <SearchComponent
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
          searchTerm={searchTerm}
          onFilterClick={() => setIsFilterOpen(true)}
        />
        <div className={styles.collectionSection}>
          <h2 className={styles.sectionTitle}>My Collection</h2>
          <PillList title="" pills={pillData} onPillToggle={handlePillToggle} />
          <div className={styles.collectionGrid}>
            {filteredData.map((item) => (
              <Link key={item.id} href={`/comparison/${item.id}`}>
                <div className={styles.collectionItem}>
                  <div className={styles.polaroidFrame}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className={styles.collectionImage}
                      onError={() => setError(`Image failed to load: ${item.image}`)}
                    />
                  </div>
                  <p className={styles.itemName}>{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {isFilterOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <FilterSettings
              onClose={() => setIsFilterOpen(false)}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              selectedRegions={selectedRegions}
              setSelectedRegions={setSelectedRegions}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
        )}
      </main>
    </div>
  );
}