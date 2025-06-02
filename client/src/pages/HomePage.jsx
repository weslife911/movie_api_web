import Pagination from '../components/Pagination'
import MovieBox from "../components/MovieBox"
import { useSelector } from 'react-redux'
import { getMovies } from '../redux/movieSlice'

function HomePage() {

	const movies = useSelector(getMovies);

	console.log(movies);

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
							{movies.map((movie) => (
								<MovieBox key={movie._id} movie={movie} />
							))}
						</div>

						<Pagination/>

					</div>
				</div>
			</main>
  )
}

export default HomePage
