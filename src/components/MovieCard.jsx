import React from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { handleImageError } from "../utils/imageUtils";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";

    if (rating >= 5 && rating < 8) return "rating-ok";
    else return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <Link to={`/movie/${movie.id}`} className="card-link">
        <img
          src={`images/${movie.image}`}
          alt={movie.title}
          onError={handleImageError}
        />
      </Link>

      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => toggleWatchlist(movie.id)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
