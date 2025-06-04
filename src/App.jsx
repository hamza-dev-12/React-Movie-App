import React, { useState, useEffect } from "react";
import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDE3ZjFjMjg4NDg0OGEwZDMzMDdiYzQ2ZGMxMGE0YiIsIm5iZiI6MTc0ODg3MjM4My40Miwic3ViIjoiNjgzZGFjYmZkZTJkZTRiMTFiN2JhYzcxIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.E45hmIJAprCz-_QJlcST2mfqU1Znr8jeDa_xvvLDjsQ",
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [error, setError] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fectch Movies");
      }

      const data = await response.json();
      setMovieList(data.results || []);

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
      alert("Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle!
          </h1>
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          ></Search>
        </header>

        <section className="all-movies">
          <h2 className="text-white">All Movies</h2>

          {isLoading ? (
            <p className="text-white">Loading ...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <p key={movie.id} className="text-white">
                  {movie.title}
                </p>
              ))}
            </ul>
          )}
        </section>

      </div>
    </main>
  );
};

export default App;
