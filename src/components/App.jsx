import { SearchBar } from './SearchBar/SearchBar';
import { ImagesGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { fetchImagesApi } from 'services/imageApi';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    isLoading: false,
    error: null,
    page: 1,
  };

  handleSubmit = async searchValue => {
    this.setState({ searchValue: searchValue, page: this.state.page });
    console.log(searchValue);
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue
      // || prevState.page !== this.state.page
    ) {
      this.showPhotos();
    }
  }

  async showPhotos() {
    this.setState({ isLoading: true });
    try {
      const { searchValue, page } = this.state;
      const images = await fetchImagesApi(searchValue, page);
      console.log(images);
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false, page: this.state.page + 1 });
      console.log(this.state.page);
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    console.log(this.state.page);
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        <ImagesGallery images={images} />
        <Button onClick={this.handleLoadMore} />
        {isLoading && <Loader />}
      </div>
    );
  }
}
