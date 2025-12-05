import React, { useState } from "react";
import Navbar from "../browse/Navbar/NavBar.jsx";
import SearchForm from "./SearchForm.jsx";
import MovieList from "../browse/Movie/MovieList.jsx";
function Search() {
  const [inputData, setInputData] = useState("");
  function onSave(data) {
    setInputData(data);
  }
  return (
    <div className="app">
      <Navbar img={false} />
      <SearchForm setData={onSave} />
      <MovieList
        query={inputData}
        typeMovie="fetchSearch"
        typeImg="backdrop_path"
        title="Result"
      />
    </div>
  );
}

export default Search;
