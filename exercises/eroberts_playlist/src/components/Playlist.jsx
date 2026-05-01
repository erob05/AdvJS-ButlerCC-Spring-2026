import './Playlist.css';

const Playlist = ({ songs, onDelete }) => {
    return (   
        <ul className="song-list">
            {songs.map((song) => (
                <li key={song.id} className="song">
                    <span className="list-text">
                        {song.title} by {song.artist} ({song.year})
                        {song.fave && <span>&#9733;</span>}
                    </span>
                    <button className="list-button"
                        type="button"
                        onClick={() => onDelete(song.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Playlist;