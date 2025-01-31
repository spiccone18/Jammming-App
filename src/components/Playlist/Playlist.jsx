import React from 'react';
import styles from './Playlist.module.css'; // Adjust the import to match your setup

function Playlist({ playlistName, playlistTracks, onNameChange, onRemove }) {
  return (
    <div className={styles.playlist}>
      <h2>{playlistName}</h2>

      {/* Playlist tracks */}
      {playlistTracks.map((track) => (
        <div key={track.id} className={styles.track}>
          <img src={track.albumArt} alt={track.name} /> {/* Assuming you have album art */}
          <h3>{track.name}</h3>
          <p>{track.artist} - {track.album}</p>

          {/* Button to remove track */}
          <button
            className={styles.removeButton}
            onClick={() => onRemove(track.id)} // Trigger remove function
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}

export default Playlist;



