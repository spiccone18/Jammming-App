import styles from './Track.module.css'; // Corrected the import for the CSS module

function Track({ track }) {
  return (
    <div className={styles.track}> {/* Use the correct CSS class from the module */}
      <p>{track.name} - {track.artist} | {track.album}</p> {/* Added album */}
    </div>
  );
}

export default Track;


