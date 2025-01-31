import styles from './Track.module.css'; // Import the CSS module

function Track({ track, onAdd, onRemove, isRemoval }) {
  
  // Function to handle adding/removing a track
  const handleClick = () => {
    if (isRemoval) {
      onRemove(track); // Remove track if in Playlist view
    } else {
      onAdd(track); // Add track if in SearchResults view
    }
  };

  return (
    <div className={styles.track}>
      <p>{track.name} - {track.artist} | {track.album}</p>
      {/* Button text changes based on isRemoval flag */}
      <button onClick={handleClick} className={styles.trackButton}>
        {isRemoval ? 'Remove' : 'Add'}
      </button>
    </div>
  );
}

export default Track;



