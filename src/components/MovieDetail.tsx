import React, { useState } from 'react';
import { Movie } from '../data/movies';

interface MovieDetailProps {
  movie: Movie;
  onBack: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onBack }) => {
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState<number | undefined>(undefined);
  const [movieReviews, setMovieReviews] = useState(movie.reviews);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!newReview || !newRating) return;

    const updatedReviews = [...movieReviews, { content: newReview, rating: newRating }];
    
    // Update reviews and average rating
    setMovieReviews(updatedReviews);
    movie.reviews = updatedReviews;

    // Reset form
    setNewReview('');
    setNewRating(undefined);
  };

  const calculateAverageRating = () => {
    if (movieReviews.length === 0) return 0;
    const totalRating = movieReviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / movieReviews.length).toFixed(1);
  };

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
        <p>Average Rating: {calculateAverageRating()}</p>
        <p className="mt-4">{movie.description}</p>
        <h3 className="mt-6 text-lg font-semibold">Reviews:</h3>
        <ul className="list-disc ml-6 mt-2">
          {movieReviews.map((review, index) => (
            <li key={index}>
              <strong>Rating: {review.rating}</strong> - {review.content}
            </li>
          ))}
        </ul>

        {/* Form to submit a new review */}
        <form onSubmit={handleReviewSubmit} className="mt-6">
          <h3 className="text-lg font-semibold">Add a Review</h3>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
          <input
            type="number"
            value={newRating || ''}
            onChange={(e) => setNewRating(Number(e.target.value))}
            placeholder="Rate the movie (1-10)"
            className="w-full p-2 border border-gray-300 rounded mt-2"
            min="1"
            max="10"
          />
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded mt-4"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieDetail
