import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import NotFound from './NotFound';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
			redirectToHome: false,
      movie: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    movieAPI.getMovie(id).then((resp) => this.setState(
      {
        movie: resp,
        isLoading: false,
      },
    ))
      .catch(() => this.setState(
        {
          isLoading: false,
          movie: {},
        },
      ));
  }

	handleDelete = async (id) => {
		await movieAPI.deleteMovie(id);
		this.setState({ ...this.state, redirectToHome: true});
	}

  render() {
    // Change the condition to check the state
    const { isLoading, movie, redirectToHome } = this.state;
    if (isLoading) return <Loading />;
		if (redirectToHome) return <Redirect to='/' />;
    
    if (movie !== undefined) {
      const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;
      return (
        <div data-testid="movie-details">
					<hr />
          <h2>{title}</h2>
          <img alt="Movie Cover" src={imagePath}  width={200}/>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
					<div className='btn-group'>
						<Link to={ `/movies/${id}/edit` } className='btn btn-primary'>Editar</Link>
						<button type="button" className='btn btn-danger' onClick={ () => this.handleDelete(id) }>
							Excluir
						</button>
						<Link className='btn btn-secondary' to="/">Voltar</Link>
					</div>
          
        </div>
      );
    }
    return <NotFound />;
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MovieDetails;
