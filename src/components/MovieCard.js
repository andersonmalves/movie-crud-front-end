import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { id, title, subtitle, storyline, rating, imagePath } = movie;
    return (
			<div className="card">
				<div className="text-center" style={{background: '#ddd'}}>
					<img alt="Movie Cover" className="card-image center" src={ imagePath } height="160px" />
				</div>
				
				<div className="card-body">
					<h4 className="card-title">{title}</h4>
					{/* <h5 className="movie-card-subtitle">{subtitle}</h5> */}
					<p className="card-text">{storyline}</p>
					{/* <span className="rating">{rating}</span> */}

			
				</div>
				<div className="card-footer text-muted">
					<Link to={ `/movies/${id}` } className="btn btn-primary">Mais detalhes</Link>
				</div>
			</div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      id: PropTypes.number,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.string,
      imagePath: PropTypes.string,
    },
  ).isRequired,
};

export default MovieCard;
