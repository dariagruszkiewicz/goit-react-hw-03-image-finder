import { SearchBar } from './SearchBar/SearchBar';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { fetchImagesApi } from 'services/imageApi';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
  };

  handleSubmit = async searchValue => {
    this.setState({ searchValue: searchValue });
    console.log(searchValue);
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue) {
      const { searchValue } = this.state;
      const images = await fetchImagesApi(searchValue);
      console.log(images);
      this.setState({ images });
    }
  }

  async showPhotos(searchValue) {
    const images = await fetchImagesApi(searchValue);
    console.log(images);
    this.setState({ images });
  }

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
