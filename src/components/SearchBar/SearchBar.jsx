import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm) {
      console.log("Search triggered with:", searchTerm); // Add this for debugging
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search for a song or artist"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;


