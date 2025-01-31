import Track from '../Track/Track';
import styles from './Tracklist.module.css';

function Tracklist({ tracks, onAdd, onRemove, isRemoval }) {
  return (
    <div className={styles.tracklist}>
      <ul>
        {tracks.map((track) => (
          <Track 
            key={track.id} 
            track={track} 
            onAdd={onAdd} 
            onRemove={onRemove} 
            isRemoval={isRemoval} 
          />
        ))}
      </ul>
    </div>
  );
}

export default Tracklist;





