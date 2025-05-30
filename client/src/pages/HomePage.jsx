import React from 'react'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <main className="main-content">
				<div className="container">
					<div className="page">

						<div className="filters">
							<select name="#" id="#" placeholder="Choose Category">
								<option value="#">Action</option>
								<option value="#">Drama</option>
								<option value="#">Fantasy</option>
								<option value="#">Horror</option>
								<option value="#">Adventure</option>
							</select>
							<select name="#" id="#">
								<option value="#">2012</option>
								<option value="#">2013</option>
								<option value="#">2014</option>
							</select>
						</div>
						<div className="movie-list">
							<div className="movie">
								<figure className="movie-poster"><img src="dummy/thumb-3.jpg" alt="#"/></figure>
								<div className="movie-title"><Link to={`/movie/1`}>Maleficient</Link></div>
								<p>Sed ut perspiciatis unde omnis iste natus error voluptatem doloremque.</p>
							</div>
						</div>

						<Pagination/>

					</div>
				</div>
			</main>
  )
}

export default HomePage
