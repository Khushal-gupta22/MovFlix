import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Banner.css";
import requests from "./Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOrignals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 2)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "....." : string;
  }

  return (
    <header
      className=" relative h-96 object-contain text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPositin: "center center",
      }}
    >
      <div className="ml-8 h-48 pt-40">
        <h1 className="pb-2 text-5xl font-extrabold">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">More Info</button>
        </div>
        <h1 className="h-20 w-[450px] max-w-sm pt-4 text-sm leading-6">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
