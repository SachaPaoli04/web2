import React from 'react';
import { Movie as MovieType } from '../types';

interface MovieProps {
  movie: MovieType;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <div className="film">
      <h3>{movie.title}</h3>
      <p><strong>Réalisateur:</strong> {movie.director}</p>
      <p><strong>Durée:</strong> {movie.duration} minutes</p>
      {movie.image && <img src={movie.image} alt={movie.title} />}
      {movie.description && <p>{movie.description}</p>}
      {movie.budget && <p><strong>Budget:</strong> ${movie.budget} millions</p>}
    </div>
  );
};

export default Movie;