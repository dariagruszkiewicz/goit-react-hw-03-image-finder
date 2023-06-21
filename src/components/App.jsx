import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
const KEY = '35804077-868b4923c4d4b0980765f3041';
const page = 1;
const perPage = 12;

axios.defaults.baseURL = `https://pixabay.com/api/?q=cat&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

export class App extends Component {
  state = {
    images: [],
    inputValue: '',
  };

  onSubmit = e => {
    e.preventDefault();
  };

  async componentDidMount() {
    const response = await axios.get(axios.defaults.baseURL);
    this.setState({ images: response.data.hits });
    console.log(response);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit}></SearchBar>
        <ImagesGallery images={this.state.images}>
          <ImageGalleryItem images={this.state.images}></ImageGalleryItem>
        </ImagesGallery>
      </div>
    );
  }
}
