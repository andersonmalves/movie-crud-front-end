import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { changePage: false,
      movie: {
        id: '',
        title: '',
        subtitle: '',
        storyline: '',
        rating: '',
        imagePath: '',
        bookmarked: false,
        genre: '',
      } };
  }

  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie)
      .then(() => this.setState({ changePage: true }));
  }

  render() {
    const { movie, changePage } = this.state;
    if (changePage) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } movie={ movie } />
      </div>
    );
  }
}

/* NewMovie.PropTypes = {
  changePage: PropTypes.bool,
} */

export default NewMovie;
