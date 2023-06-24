import { SearchBar } from './SearchBar/SearchBar';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { fetchImagesApi } from 'services/imageApi';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
  };

  handleSubmit = searchValue => {
    this.setState({ searchValue: searchValue });
    console.log(searchValue);
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
    const { images } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        <ImagesGallery images={images} />
      </div>
    );
  }
}
