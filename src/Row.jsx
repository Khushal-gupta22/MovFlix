import axios from "./axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  // console.log(movies);

  return (
    <div className="ml-5 text-white ">
      <h2 className="">{title}</h2>

      <div className=" row__container flex overflow-y-hidden overflow-x-scroll scroll-smooth p-5 scrollbar-hide">
        {movies.map(
          (movie) =>
            (isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path && (
              <img
                className={` item__container mr-[10px] max-h-[100px] rounded-sm object-contain transition-transform duration-[450ms] hover:scale-[1.2] hover:opacity-100 ${
                  isLargeRow && " max-h-[250px]"
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Row;
