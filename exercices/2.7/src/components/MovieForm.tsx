import React, { useState } from 'react';
import { Movie } from '../types';

interface MovieFormProps {
  addMovie: (movie: Movie) => void;
}

const MovieForm: React.FC<MovieFormProps> = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [duration, setDuration] = useState<number | ''>('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMovie: Movie = { title, director, duration: Number(duration), image, description, budget: Number(budget) };
    addMovie(newMovie);
    setTitle('');
    setDirector('');
    setDuration('');
    setImage('');
    setDescription('');
    setBudget('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Titre:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />
      <label htmlFor="director">Réalisateur:</label>
      <input type="text" id="director" value={director} onChange={(e) => setDirector(e.target.value)} required /><br />
      <label htmlFor="duration">Durée (minutes):</label>
      <input type="number" id="duration" value={duration} onChange={(e) => setDuration(Number(e.target.value))} required /><br />
      <label htmlFor="image">Lien vers l'image:</label>
      <input type="url" id="image" value={image} onChange={(e) => setImage(e.target.value)} /><br />
      <label htmlFor="description">Description:</label>
      <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea><br />
      <label htmlFor="budget">Budget (en millions):</label>
      <input type="number" id="budget" value={budget} onChange={(e) => setBudget(Number(e.target.value))} /><br />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default MovieForm;