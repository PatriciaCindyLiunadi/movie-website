import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div>
      <h2>Movie Detail</h2>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <img src={movie.poster} alt={movie.title} />
    </div>
  );
};

export default MovieDetail;
