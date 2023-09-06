import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './login'; // Pastikan path ke komponen Login Anda sesuai
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import fakeApi from './fakeApi'; // Import fakeApi

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    // Data film Anda
  ];

  const handleLogin = (username, password) => {
    // Implementasi verifikasi login di sini
    setLoggedIn(true);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <h1>Cinema XXI</h1>
        </div>
        <div className="header-right">
          <div className="search-bar">
            <input type="text" placeholder="Cari film..." />
            <button>Cari</button>
          </div>
        </div>
      </header>
      <nav className="navigation">
        <ul className="main-menu">
          <li>Now Playing</li>
          <li>Upcoming</li>
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
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <>
          {selectedMovie ? (
            <MovieDetail movie={selectedMovie} />
          ) : (
            <MovieList movies={movies} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
