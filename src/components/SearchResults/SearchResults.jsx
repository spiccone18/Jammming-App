import Track from '../Track/Track'; // Importing the Track component
import styles from './SearchResults.module.css'; // Importing styles from the CSS module

// The SearchResults component takes the 'results' prop to display search results
function SearchResults({ results }) {
  return (
    <div className={styles.searchResults}> {/* Use 'styles.searchResults' to apply the correct CSS class */}
      <h2>Search Results</h2>
      {results.length === 0 ? (
        <p>No results found</p> // If no results, show a message
      ) : (
        <ul>
          {results.map((track) => (
            <Track key={track.id} track={track} /> // For each track, render a Track component
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchResults; // Exporting SearchResults component for use elsewhere

