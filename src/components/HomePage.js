import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import Search from "./Search";


  function HomePage() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e3a92895b0a6c5293e775e40825cf6cf"
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
          console.log(data);
        });
        
    }, []);
    function handleSearch(searches) {
      setMovies([...searches]);
    }
  
    function handleFilter(event) {
      const filterMovie = movies.filter(movie => movie.original_title === event.target.value)
      setMovies(filterMovie)
      }
  return (
    <div>
    <Search handleSearch={handleSearch} handleFilter= {handleFilter}/>
    <MovieList movies={movies} setMovies={setMovies} />
  </div>
);
}


export default HomePage
