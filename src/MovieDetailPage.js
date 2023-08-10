import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "./axios";
import './MovieDetailPage.css';
import requests from "./requests";
import Row from './Row';
import Nav from './Nav';


function MovieDetailPage() {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e73f71436cd86507240a50ed4722dcaf`
      );
      setMovie(request.data);
      return request;
    }
    fetchData();
  }, [id]);

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  return (
    <div>
          <Nav />
    <div>
      <img
        className="image"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt={movie.title}
        width="200"
      />
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 200)}</h1>
      </div>
    </div>
    <Row title= "You migth also like" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default MovieDetailPage;
