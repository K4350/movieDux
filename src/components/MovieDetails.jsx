import React from "react";
import { useParams } from "react-router-dom";
import "../styles.css";
import { handleImageError } from "../utils/imageUtils";

export default function MovieDetails({ movies }) {
  const { id } = useParams(); // get id from URL
  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div className="movie-details-page">
      <img
        src={`/images/${movie.image}`}
        alt={movie.title}
        className="details-poster"
        onError={handleImageError}
      />

      <div className="details-info">
        <h1>{movie.title}</h1>
        <span>
          <strong>Genre:</strong> {movie.genre}
        </span>
        <span>
          <strong>Rating:</strong> {movie.rating}
        </span>
        <p>
          <strong>Description:</strong> Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Impedit, reiciendis tempore! Velit sunt voluptatibus
          ipsa eos ipsum quos aliquid natus, neque voluptate accusamus? Officiis
          culpa omnis corporis facere. Culpa deserunt sed, nam corporis facilis,
          accusamus, molestias quo temporibus accusantium exercitationem quidem
          aliquam iusto dolorem blanditiis? Quam voluptate eum vel nemo quia
          sequi eos dicta reprehenderit libero tenetur, aperiam beatae aliquam
          earum, qui corporis expedita omnis quae officiis rerum repudiandae
          nesciunt. Nulla, velit quos maxime fugit quis sed commodi
          necessitatibus consectetur rerum sapiente voluptas dolore consequatur
          aliquam! Illum, molestiae ipsum, autem, asperiores quas maiores
          consequuntur repellat saepe impedit voluptates cum magnam?
        </p>
      </div>
    </div>
  );
}
