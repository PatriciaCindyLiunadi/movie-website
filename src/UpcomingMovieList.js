import React from 'react';
import './MovieList.css'; 

const upcomingMovies = [
  {
    id: 5,
    title: 'The Creator',
    imageUrl: 'The Creator.jpg',
    ageRating: 'PG',
  },
  {
    id: 6,
    title: 'Freelance',
    imageUrl: 'Freelance.jpg',
    ageRating: 'D17+',
  },
  {
    id: 7,
    title: 'Jawan',
    imageUrl: 'Jawan.jpg',
    ageRating: 'D17+',
  },
  {
    id: 8,
    title: 'No Hard Feelings',
    imageUrl: 'No Hard Feelings.jpg',
    ageRating: 'D17+',
  },
  {
    id: 9,
    title: 'The Creator',
    imageUrl: 'The Creator.jpg',
    ageRating: 'PG',
  },
  {
    id: 10,
    title: 'Freelance',
    imageUrl: 'Freelance.jpg',
    ageRating: 'D17+',
  },
  {
    id: 11,
    title: 'Jawan',
    imageUrl: 'Jawan.jpg',
    ageRating: 'D17+',
  },
  {
    id: 12,
    title: 'No Hard Feelings',
    imageUrl: 'No Hard Feelings.jpg',
    ageRating: 'D17+',
  },

];

const UpcomingMovieList = () => {
  return (
    <div className="movie-list">
      <h2>Upcoming Movies</h2>
      <div className="movie-container">
        {upcomingMovies.map((movie) => (
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

export default UpcomingMovieList;
