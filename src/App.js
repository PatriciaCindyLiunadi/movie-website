import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './login'; 
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import fakeApi from './fakeApi'; 
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import UpcomingMovieList from './UpcomingMovieList';
import Homepage from './Homepage';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const dummyMovies = [
    // Data film Anda
  ];

  useEffect(() => {
    // Mengambil data film dari API atau sumber lainnya dan menyimpannya di state movies
    // Misalnya, jika menggunakan fakeApi, Anda bisa memanggil fakeApi.getMovies() dan kemudian setMovies dengan hasilnya.
    // Contoh:
    // fakeApi.getMovies().then((data) => setMovies(data));
    setMovies(dummyMovies); // Ini contoh penggunaan data dummy
  }, []);

  const handleLogin = (username, password) => {
    // Implementasi verifikasi login di sini
    setLoggedIn(true);
  };

  const handleSearch = () => {
    const filteredMovies = dummyMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-left">
            <h1>
              <Link to="/">Cinema XXI</Link>
            </h1>
          </div>
          <div className="header-right">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Cari film..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button onClick={handleSearch}>Cari</button>
            </div>
          </div>
        </header>
        <nav className="navigation">
          <ul className="main-menu">
            <li><Link to="/nowplaying">Now Playing</Link></li>
            <li><Link to="/upcoming">Upcoming</Link></li>
            <li>Theaters</li>
            <li>Promotion</li>
            <li>Info21</li>
          </ul>
          <div className="extras">
            <span>IMAX</span>
            <span>DOLBY ATMOS</span>
            <span>M-Tix</span>
          </div>
        </nav>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/upcoming" element={<UpcomingMovieList movies={movies} />} />
          <Route path="/nowplaying" element={<MovieList movies={movies} />} />
          <Route
            path="/"
            element={<Homepage nowPlayingMovies={movies} upcomingMovies={movies} />}
          />
          <Route
            path="/cinemaxxi"
            element={<Homepage nowPlayingMovies={movies} upcomingMovies={movies} />}
          />
          <Route path="/" element={!loggedIn ? <Login handleLogin={handleLogin} /> : <MovieList movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
