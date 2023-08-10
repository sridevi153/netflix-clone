import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "./axios";
import "./Cards.css";

function Cards({ fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const base_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    //   console.log("wprkinf", request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div className="row">
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className="card"
            src={`${base_URL}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
        </div>
        </div>
  );
}

export default Cards;
