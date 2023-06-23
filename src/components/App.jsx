import { SearchBar } from './SearchBar/SearchBar';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { images } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        <ImagesGallery images={images} />
      </div>
    );
  }
}
