import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import Tracklist from './components/Tracklist/Tracklist';
import Track from './components/Track/Track';

  
function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  // Handle search functionality
  const handleSearch = async (searchTerm) => {
    // Fetch search results from the Spotify API here
    const results = await fetchSearchResults(searchTerm);
    setSearchResults(results);
  };

  // Save the playlist to the user's Spotify account
  const handleSaveToSpotify = async () => {
    // Call Spotify API to save playlist
    console.log('Saving to Spotify...');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} />
      <Playlist playlist={playlist} />
      <button onClick={handleSaveToSpotify}>Save to Spotify</button>
    </div>
  );
}

// Mock API function
const fetchSearchResults = async (searchTerm) => {
  // Replace with actual Spotify API fetch logic
  return [
    { id: 1, name: 'Song 1', artist: 'Artist 1' },
    { id: 2, name: 'Song 2', artist: 'Artist 2' },
  ];
};

export default App;