import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
// import movies from '../services/movieData';
import { Loading } from '../components';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    movieAPI.getMovies()
      .then((resp) => this.setState(
        { movies: resp,
          isLoading: false,
        },
      ));
  }

  render() {
    const { movies, isLoading } = this.state;
    // Render Loading here if the request is still happening

    movies.forEach((e) => { e.rating = toString(e.rating); });
    return (
			<div>
				<div className="btn-group">
					<Link to="/movies/new" className="btn btn-primary">Adicionar filme</Link>
				</div>
				<hr />
				<div data-testid="movie-list" className="mainContain">
					{isLoading && <Loading />}
					<div className='card-group'>
						{movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
					</div>
				</div>	
				
			</div>
    );
  }
}

export default MovieList;
