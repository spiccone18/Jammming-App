import { useState } from 'react'; // Importing the useState hook to manage state
import styles from './SearchBar.module.css'; // Importing the styles from SearchBar.module.css

// The functional component for SearchBar
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState(''); // Initializing the searchTerm state to an empty string

  // Function that is triggered when the search button is clicked
  const handleSearch = () => {
    if (searchTerm) { // If there is a value in searchTerm, trigger the search
      onSearch(searchTerm); // Call the onSearch function passed as a prop with the search term
      setSearchTerm(''); // Clear the searchTerm input field after triggering the search
    }
  };

  return (
    <div className={styles.searchBar}> {/* Correctly applying the styles */}
      <input
        type="text"
        placeholder="Search for a song or artist" // Placeholder text
        value={searchTerm} // Binding the value of the input field to searchTerm state
        onChange={(e) => setSearchTerm(e.target.value)} // Updating the searchTerm state when user types
      />
      <button onClick={handleSearch}>Search</button> {/* Calling handleSearch function when button is clicked */}
    </div>
  );
}

export default SearchBar; // Exporting the SearchBar component to use it elsewhere

