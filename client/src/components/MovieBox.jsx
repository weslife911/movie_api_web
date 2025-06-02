import React from 'react'
import { Link } from 'react-router-dom'

function MovieBox({ movie }) {

  return (
    <div className="movie">
        <figure className="movie-poster"><img src="dummy/thumb-3.jpg" alt="#"/></figure>
        <div className="movie-title"><Link to={`/movie/${movie._id}`}>
          {movie.title}
        </Link></div>
        <p>
          {movie.description}
        </p>
    </div>
  )
}

export default MovieBox
