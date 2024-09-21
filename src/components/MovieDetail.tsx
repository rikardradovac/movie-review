import React from 'react';
import { Movie } from '../data/movies';

interface MovieDetailProps {
  movie: Movie;
  onBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onBack }) => {
  return (
    <div className="p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
        onClick={onBack}
      >
        Back to list
      </button>
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        <p>{movie.year}</p>
        <p>Rating: {movie.rating}</p>
        <p className="mt-4">{movie.description}</p>
        <h3 className="mt-6 text-lg font-semibold">Reviews:</h3>
        <ul className="list-disc ml-6 mt-2">
          {movie.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;
