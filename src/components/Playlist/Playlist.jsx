import Tracklist from '../Tracklist/Tracklist'; // Import the Tracklist component
import styles from './Playlist.module.css'; // Import the CSS module as 'styles'

// The Playlist component receives a 'playlist' prop to display the list of tracks
function Playlist({ playlist }) {
  return (
    <div className={styles.playlist}> {/* Use 'styles.playlist' to apply the correct CSS class */}
      <h2>Your Playlist</h2>
      <Tracklist tracks={playlist} /> {/* Render Tracklist component passing the playlist */}
    </div>
  );
}

export default Playlist; // Export the Playlist component for use elsewhere