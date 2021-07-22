import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
			<div className='form-group'>
        <label htmlFor="movie_title">Título</label>
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate form-control"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
         
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className='form-group'>
        <label htmlFor="movie_subtitle">Subtítulo</label>
				<input
					placeholder="Insira o subtítulo"
					id="movie_subtitle"
					type="text"
					className="form-control"
					value={ subtitle }
					onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
				/>
          
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="form-group">
        <label htmlFor="movie_image">Imagem</label>
				<input
					placeholder="Insira o caminho da imagem"
					id="movie_image"
					className="form-control"
					type="text"
					value={ imagePath }
					onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
				/>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className='form-group'>
        <label htmlFor="movie_storyline">Sinopse</label>
				<textarea
					id="movie_storyline"
					className="form-control"
					value={ storyline }
					onChange={ (event) => this.updateMovie('storyline', event.target.value) }
				/>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <div>
        <label htmlFor="movie_genre">Gênero</label> 
				<select
					id="movie_genre"
					className="form-control"
					value={ genre }
					onChange={ (event) => this.updateMovie('genre', event.target.value) }
				>
					<option value="action">Ação</option>
					<option value="comedy">Comédia</option>
					<option value="thriller">Suspense</option>
					<option value="fantasy">Fantasia</option>
				</select>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <div>
        <label htmlFor="movie_rating">Avaliação</label>
				<input
					placeholder="Dê a avaliação do filme"
					id="movie_rating"
					type="number"
					className="form-control"
					step={ 0.1 }
					min={ 0 }
					max={ 5 }
					value={ rating }
					onChange={ (event) => this.updateMovie('rating', event.target.value) } />
          
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        
      </div>
    );
  }

  render() {
    return (
      <div className="col-sm-10 col-sm-offset-2">
				<h3>Adicionar novo filme</h3>
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
					<div class="btn-group" role="group" aria-label="Basic example">
						<button
							type="button"
							className="btn btn-sm btn-primary"
							onClick={ this.handleSubmit }>
							Salvar
						</button>
						<Link to="/" className="btn btn-secondary">Voltar</Link>
					</div>
          
        </form>				
      </div>
    );
  }
}

export default MovieForm;

MovieForm.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
