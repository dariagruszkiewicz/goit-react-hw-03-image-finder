import css from './SearchBar.module.css';
import { Component } from 'react';
import { fetchImagesApi } from 'services/imageApi';

export class SearchBar extends Component {
  state = {
    searchValue: '',
    images: [],
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.searchValue !== this.state.searchValue) {
      return true;
    } else {
      return false;
    }
  }

  async componentDidUpdate() {
    const { searchValue } = this.state;
    const images = await fetchImagesApi(searchValue);
    console.log(images);
    this.setState({ images });
  }

  render() {
    const { onSubmit } = this.props;
    const { searchValue } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={onSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchForm_button}>
            <span className={css.searchForm_button_label}>Search</span>
          </button>

          <input
            className={css.searchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={searchValue}
          />
        </form>
      </header>
    );
  }
}
