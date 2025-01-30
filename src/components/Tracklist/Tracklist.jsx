import Track from '../Track/Track'; // Import the Track component
import styles from './Tracklist.module.css'; // Import the CSS module as 'styles'

// The Tracklist component receives a 'tracks' prop to display a list of tracks
function Tracklist({ tracks }) {
  return (
    <div className={styles.tracklist}>
      <h3>Tracklist</h3>
      <ul>
        {tracks.map((track) => (
          // Render Track component for each track
          <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
}

export default Tracklist; // Export the Tracklist component for use elsewhere



