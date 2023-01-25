import React from 'react'

function MovieList({ movies }) {
  return (
    <div className="container">
      <div className="row ">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie}/> 
        ))}
      </div>
    </div>
  )
}

export default MovieList