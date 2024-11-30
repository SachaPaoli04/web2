import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import { Movie } from '../types';
import './App.css';

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([
    {
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      image: "https://example.com/inception.jpg",
      description: "Un voleur qui vole des secrets à travers l'utilisation de la technologie de partage de rêves.",
      budget: 160
    },
    {
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      image: "https://example.com/matrix.jpg",
      description: "Un pirate informatique découvre la vérité sur sa réalité.",
      budget: 63
    },
    // Ajoutez trois autres films ici
  ]);

  const addMovie = (movie: Movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div>
      <h1>Mes Films Préférés</h1>
      <MovieList movies={movies} />
      <h2>Ajouter un Film</h2>
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

export default App;