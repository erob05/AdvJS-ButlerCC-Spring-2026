// import the useState hook
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// import the components for the app
import Header from './components/Header';
import Playlist from './pages/Playlist';
import SongForm from './pages/SongForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TitleUpdater from './components/TitleUpdater';
import NotFound from './pages/NotFound';

// import the CSS for the App component
import './App.css';

// app name to display in the header and footer
const appName = 'ER Playlist';

// array of songs to display in the playlist
const initialSongs = [
    { id: 1, title: "Espresso", artist: "Sabrina Carpenter", year: 2024 },
    { id: 2, title: "Electric Feel", artist: "MGMT", year: 2007 },
    { id: 3, title: "Come As You Are", artist: "Nirvana", year: 1991 },
    { id: 4, title: "Dancing Queen", artist: "ABBA", year: 1976, fave: true },
];

const App = () => {
    // state to track the playlist and whether to show the add song form
    const [playlist, setPlaylist] = useState(initialSongs);
    // const [showForm, setShowForm] = useState(false);

    // event handler to show the add song form
    // const handleShowForm = () => setShowForm(true);

    // event handler to hide the add song form
    // const handleHideForm = () => setShowForm(false);

    // event handler to add a new song to the playlist
    const handleAddSong = (newSong) => {
        setPlaylist((prev) => {
            const maxId = prev.reduce((max, song) => (song.id > max ? song.id : max), 0);
            return [...prev, { ...newSong, id: maxId + 1 }];
        });
        // setShowForm(false);  // close the form after adding
    };

    // event handler to delete a song from the playlist
    const handleDeleteSong = (id) => {
        setPlaylist((prev) => prev.filter((song) => song.id !== id));
    };

    // routes array
    const routeData = [
        { path: '/', 
            element: <Playlist songs={playlist} 
                               onDelete={handleDeleteSong} />,
            title: 'All Songs | My Playlist' },
        { path: '/add', 
            element: <SongForm onAdd={handleAddSong} />,
            title: 'Add Song | My Playlist' },
        { path: '/*', 
            element: <NotFound />,
            title: 'Page Not Found | My Playlist'
         }
    ];

    // JSX for the App component
    return (
        <div className="container">
            <Header appName={appName}>
                <p>Favorite songs marked with a star</p>
            </Header>
            <Navbar />
            <main className="main-content">
                <Routes>
                    {routeData.map(({ path, element, title }) => (
                        <Route 
                            key={path} 
                            path={path} 
                            element={
                                <TitleUpdater title={title}>
                                    {element}
                                </TitleUpdater>
                            } 
                        />
                    ))}
                </Routes>
            </main>   
            <Footer appName={appName} />
        </div>
    );
};

export default App;