import React from 'react';
import './MovieList.css';

const movies = [
  {
    id: 1,
    title: 'The Nun II',
    imageUrl: 'The nun.jpg',
    ageRating: 'R13+',
  },
  {
    id: 2,
    title: 'Aku Tahu Kapan Kamu Mati',
    imageUrl: 'Aku Tahu Kapan Kamu Mati.jpg',
    ageRating: 'D17+',
  },
  {
    id: 3,
    title: 'The Equalizer 3',
    imageUrl: 'Equalizer 3.jpg',
    ageRating: 'D17+',
  },
  {
    id: 4,
    title: 'Gran Turismo',
    imageUrl: 'Gran Turismo.jpg',
    ageRating: 'R13+',
  },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      <h2>Now Playing</h2>
      <div className="movie-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.imageUrl} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.ageRating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;