import React from 'react';
import { Movie } from '../data/movies';

interface MovieListProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onSelectMovie }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
          onClick={() => onSelectMovie(movie)}
        >
          <h3 className="text-xl font-bold">{movie.title}</h3>
          <p>{movie.year}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
