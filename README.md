#Jamming App 

This is a React web app that lets users search Spotify and create their own custom playlists and then save it to their spotify account. It uses the Spotify API and  provides a better UI and method than simply searching for songs and adding them to playlist within the mobile app which can be time consuming and not intuitive.

## Functionality in Progress 
- logging into Spotify - having trouble fetching tokens
- search functionality
- only displaying songs not currently present in the playlist in search results


## Potential Functionality Adds in the Future 
- Include preview samples for each track
- Update the access token logic to expire at exactly the right time, instead of setting expiration from when the user initiates their next search
- After user redirect on login, restoring the search term from before the redirect
- Ensure playlist information doesn’t get cleared if a user has to refresh their access token




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
