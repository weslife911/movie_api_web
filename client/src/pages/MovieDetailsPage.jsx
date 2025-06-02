import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getMovieById } from '../redux/movieSlice';
import { getDirectors } from '../redux/directorSlice';

function MovieDetailsPage() {

    const { id } = useParams();

	const movie = useSelector((state) => getMovieById(state, id));

	const directors = useSelector(getDirectors)

  return (
    <main className="main-content">
				<div className="container">
					<div className="page">
						<div className="breadcrumbs">
							<Link to="/">Home</Link>
							<span>
								{movie.title}
							</span>
						</div>

						<div className="content">
							<div className="row">
								<div className="col-md-6">
									<figure className="movie-poster"><img src="dummy/single-image.jpg" alt="#"/></figure>
								</div>
								<div className="col-md-6">
									<h2 className="movie-title">
										{movie.title}
									</h2>
									<div className="movie-summary">
										<p>
											{movie.description}
										</p>
									</div>
									<ul className="movie-meta">
										<li><strong>Rating:</strong> 
											<div className="star-rating" title={`Rated ${movie.rating} out of 5`}><span style={{ width: "80%" }}><strong className="rating">
												{movie.rating}
											</strong> out of 5</span></div>
										</li>
										<li><strong>Length:</strong>
										{movie.length}</li>
										<li><strong>Category:</strong> 
											{movie.genre}
										</li>
									</ul>

									<ul className="starring">
										<li><strong>Directors:</strong> Kirk de Mico (as Kirk DeMico). Chris Sanders</li>
										<li><strong>Writers:</strong> Chris Sanders (screenplay), Kirk De Micco (screenplay)</li>
										<li><strong>Stars:</strong> Nicolas Cage, Ryan Reynolds, Emma Stone</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
  )
}

export default MovieDetailsPage
