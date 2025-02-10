import React from 'react';
import './Playlist.module.css';

function Playlist({ playlistName, playlistTracks, onNameChange, onRemove }) {
  return (
    <div className="Playlist">
      {/* ✏️ Editable Playlist Name */}
      <input 
        type="text" 
        value={playlistName} 
        onChange={(e) => onNameChange(e.target.value)} 
        className="Playlist-name"
      />

      {/* 🎵 List of Tracks in Playlist */}
      <ul>
        {playlistTracks.map(track => (
          <li key={track.id}>
            <div className="track-info">
              <strong>{track.name}</strong> - {track.artist} ({track.album})
            </div>
            <button onClick={() => onRemove(track.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
