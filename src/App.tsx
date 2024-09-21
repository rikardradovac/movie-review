import React, { useState } from 'react';
import { movies, Movie } from './data/movies';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

const App: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleBack = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Movie Review App</h1>
        {selectedMovie ? (
          <MovieDetail movie={selectedMovie} onBack={handleBack} />
        ) : (
          <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        )}
      </div>
    </div>
  );
};

export default App;
