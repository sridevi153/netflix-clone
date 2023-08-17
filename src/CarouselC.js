// import React, { useEffect, useState } from "react";
// import axios from "./axios";
// import requests from "./requests";
// import { Carousel } from "react-bootstrap";
// import "./CarouselC.css";

// function CarouselC() {
//   const [movies, setMovies] = useState([]);
//   const base_URL = "https://image.tmdb.org/t/p/original/";
//   const fetchUrl = requests.fetchNetflixOriginals;
//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchUrl);
//       setMovies(request.data.results);
//       console.log("wprkinf", request);
//       return request;
//     }
//     fetchData();
//   }, [fetchUrl]);

//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <div className="carouselContainer">
//       <Carousel controls={false} indicators={false} interval={1000}>
//         {movies.map((item) => (
//           <Carousel.Item key={item.id}>
//             <img
//               className="d-block w-100"
//               src={`${base_URL}${item.poster_path}`}
//             />
//             <div className="banner__contents">
//               <h1 className="banner__title">
//                 {item?.title || item?.name || item?.original_name}
//               </h1>
//               <div className="banner__buttons">
//                 <button className="banner__button">Play</button>
//                 <button className="banner__button">My List</button>
//               </div>
//               <h1 className="banner__description">
//                 {truncate(item?.overview, 200)}
//               </h1>
//             </div>
//           </Carousel.Item>
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// export default CarouselC;


import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import { Carousel } from "react-bootstrap";
import "./CarouselC.css";
import { useNavigate } from 'react-router-dom';

function CarouselC() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const base_URL = "https://image.tmdb.org/t/p/original/";
  const fetchUrl = requests.fetchTrending;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log("working", request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="carouselContainer">
      <Carousel controls={false} indicators={false} interval={1000}>
        {movies.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={`${base_URL}${item.poster_path}`}
            />
            <div className="banner__contents">
              <h1 className="banner__title">
                {item?.title || item?.name || item?.original_name}
              </h1>
              <div className="banner__buttons">
                <button className="banner__button" onClick={() => handleClick(item.id)}>More</button>
                <button className="banner__button">My List</button>
              </div>
              <h1 className="banner__description">
                {truncate(item?.overview, 200)}
              </h1>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselC;
