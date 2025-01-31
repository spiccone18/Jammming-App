import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  // 🔹 Search results (mock data for now)
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: "Blinding Lights", artist: "The Weeknd", album: "After Hours" },
    { id: 2, name: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line" },
    { id: 3, name: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia" }
  ]);

  // 🔹 Playlist name
  const [playlistName, setPlaylistName] = useState("My Playlist");

  // 🔹 Tracks in the playlist
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // 🎵 Add track to playlist (prevent duplicates)
  const addTrackToPlaylist = (track) => {
    if (!playlistTracks.some(existingTrack => existingTrack.id === track.id)) {
      setPlaylistTracks([...playlistTracks, track]);
    }
  };

  // ❌ Remove track from playlist
  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== trackId));
  };

  // ✏️ Update playlist name
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  // 🔄 Mock search function (replace with API later)
  const handleSearch = async (searchTerm) => {
    console.log(`Searching for: ${searchTerm}`);
    // Replace this with Spotify API call later
    setSearchResults([
      { id: 4, name: "Song 4", artist: "Artist 4", album: "Album 4" },
      { id: 5, name: "Song 5", artist: "Artist 5", album: "Album 5" },
    ]);
  };

  // 🚀 Save playlist to Spotify (API integration later)
  const handleSaveToSpotify = () => {
    console.log(`Saving playlist: ${playlistName} with tracks:`, playlistTracks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>

      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} onAdd={addTrackToPlaylist} />

      <Playlist 
        playlistName={playlistName} 
        playlistTracks={playlistTracks} 
        onNameChange={updatePlaylistName}
        onRemove={removeTrackFromPlaylist}
      />

      <button onClick={handleSaveToSpotify}>Save to Spotify</button>
    </div>
  );
}

export default App;

