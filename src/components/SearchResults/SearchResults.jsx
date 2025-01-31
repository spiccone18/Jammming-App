import React from 'react';
import styles from './SearchResults.module.css'; // Adjust the import to match your setup

function SearchResults({ results, onAdd }) {
  return (
    <div className={styles.searchResults}>
      {results.map((track) => (
        <div key={track.id} className={styles.track}>
          <img src={track.albumArt} alt={track.name} /> {/* Assuming you have album art */}
          <h3>{track.name}</h3>
          <p>{track.artist} - {track.album}</p>
          {/* Button for adding track to the playlist */}
          <button 
            className={styles.addButton} 
            onClick={() => onAdd(track)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;


