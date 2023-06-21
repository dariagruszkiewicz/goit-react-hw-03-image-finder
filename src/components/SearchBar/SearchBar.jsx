import css from './SearchBar.module.css';

export const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm}>
        <button
          type="submit"
          className={css.searchForm_button}
          onClick={onSubmit}
        >
          <span className={css.searchForm_button_label}>Search</span>
        </button>

        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
