import React from "react";
import Navbar from "./Navbar/NavBar.jsx";
import Banner from "./Banner/Banner.jsx";
import MovieList from "./Movie/MovieList.jsx";
function Browse() {
  return (
    <div className="app">
      <Navbar img={true} />
      <Banner />
      <MovieList
        title="Original"
        typeMovie="fetchNetflixOriginals"
        typeImg="poster_path"
        query=""
      />
      <MovieList
        title="Xu hướng"
        typeMovie="fetchTrending"
        typeImg="poster_path"
        query=""
      />
      <MovieList
        title="Xếp hạng cao"
        typeMovie="fetchTopRated"
        typeImg="poster_path"
        query=""
      />
      <MovieList
        title="Hành động"
        typeMovie="fetchActionMovies"
        typeImg="poster_path"
        query=""
      />
      <MovieList
        title="Hài"
        typeMovie="fetchComedyMovies"
        typeImg="backdrop_path"
        query=""
      />
      <MovieList
        title="Kinh dị"
        typeMovie="fetchHorrorMovies"
        typeImg="backdrop_path"
        query=""
      />
      <MovieList
        title="Lãng mạn"
        typeMovie="fetchRomanceMovies"
        typeImg="backdrop_path"
        query=""
      />
      <MovieList
        title="Tài liệu"
        typeMovie="fetchDocumentaries"
        typeImg="backdrop_path"
        query=""
      />
    </div>
  );
}

export default Browse;
