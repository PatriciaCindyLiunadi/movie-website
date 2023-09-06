import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h2>Movie Detail</h2>
      <h3>{movie.title}</h3>
      <p>{movie.ageRating}</p>
      <img src={movie.imageUrl} alt={movie.title} />
    </div>
  );
};

export default MovieDetail;
