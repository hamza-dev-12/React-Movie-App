import React from "react";

const MovieCard = ({ movie }) => {
  const {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    id,
  } = movie;

  return (
    <div className="movie-card" key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="movie-image"
      />

      <div className="mt-4">
        <h3>{title}</h3>

        <div className="content">
          <div className="rating">
            <img src="star.svg" alt="" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            <span>•</span>
            <p className="lang">{original_language}</p>

            <span>•</span>
            <p className="year">
              {release_date ? release_date.split("-")[0] : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
