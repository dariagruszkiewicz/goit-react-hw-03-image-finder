import css from './SearchBar.module.css';
import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    searchValue: '',
    images: [],
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

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
