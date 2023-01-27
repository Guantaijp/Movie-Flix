import React from "react";
import NavBar from "./NavBar";

function Search({ handleSearch, handleFilter }) {
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "api_key=e3a92895b0a6c5293e775e40825cf6cf";
  const SEARCH_URL = `${BASE_URL}/search/movie?${API_KEY}`;

  function handleOnSubmit(e) {
    e.preventDefault();

    let search = document.getElementById("inputText").value;

    if (search) {
      fetch(SEARCH_URL + "&query=" + search)
        .then((res) => res.json())
        .then((data) => {
          handleSearch(data.results);
        });
    }
  }
  return <NavBar handleOnSubmit={handleOnSubmit} handleFilter={handleFilter} />;
}

export default Search;
