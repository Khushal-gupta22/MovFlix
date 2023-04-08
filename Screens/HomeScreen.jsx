import React from "react";
import Banner from "../src/Banner";
import Navbar from "../src/Navbar";
import requests from "../src/Requests";
import Row from "../src/Row";

const HomeScreen = () => {
  return (
    <div className="bg-black">
      {/* nav bar */}
      <Navbar />

      {/* banner  */}
      <Banner />

      {/* rows  */}
      <Row
        title="NETFLIX ORIGNALS"
        fetchUrl={requests.fetchNetflixOrignals}
        isLrgeRow
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
};

export default HomeScreen;
