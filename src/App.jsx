import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

function App() {
  // 🔹 Search results (empty for now)
  const [searchResults, setSearchResults] = useState([]);

  // 🔹 Playlist name (editable)
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

  // ✏️ Update playlist name (controlled input)
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  // 🔄 Search functionality with Spotify API
  const handleSearch = async (searchTerm) => {
    const accessToken = localStorage.getItem("spotifyToken"); // Retrieve token
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}`;

    try {
      const response = await fetch(searchUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch');

      const data = await response.json();

      const tracks = data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
      }));
      setSearchResults(tracks);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  // 🚀 Save playlist to Spotify (mock functionality)
  const handleSaveToSpotify = () => {
    if (!playlistTracks.length) {
      console.log("Playlist is empty. Nothing to save.");
      return;
    }

    const trackURIs = playlistTracks.map(track => track.uri || "No URI Available");

    console.log(`Saving playlist: ${playlistName}`);
    console.log("Track URIs:", trackURIs);

    // Reset the playlist after saving
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  // Redirect to Spotify for authorization
  const redirectToSpotify = () => {
    const clientId = "c5af055a59354fb7a39fbd57d36239ad";
    const redirectUri = "http://localhost:5173/";
    const scope = "playlist-modify-public playlist-modify-private";
    const state = Math.random().toString(36).substring(7); // Generate a random string for security
  
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scope}&state=${state}`;
    
    window.location = authUrl; // Redirect user to Spotify's login page
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
      <button onClick={redirectToSpotify}>Login to Spotify</button>

    </div>
  );
}

export default App;





