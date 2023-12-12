import React, { Component } from 'react';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImage } from 'api' 
import { Loader } from './Loader/Loader';
import { Toaster } from 'react-hot-toast';


export class App extends Component {
  state = {
    images: [], 
    page: 1,
    isLoading: false,
    query: '',
    error: false,
    quantity: 0,
    randomIndex: 0,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
      try {
        this.setState({
          isLoading: true,
          error: null,
        });

        const initialFetch = await fetchImage(query, page);

        this.setState((prevState) => ({
          images: [...prevState.images, ...initialFetch.hits],
          showBtn: page < Math.ceil(initialFetch.totalHits / 12),
        }));
      } catch (error) {
        this.setState({
          error: "Oops. Please, try again!",
        });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSubmit = (newValue) => {
    console.log(newValue);
    this.setState({
      query: newValue.query,
      page: 1,
      images: [],
    });
  };

  handleLoadMore = () => {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { images, isLoading, showBtn } = this.state;
    const galleryImage = images.length !== 0;

    return (
      <div className='App'>
        <Searchbar onSubmit={this.handleSubmit} />

        {galleryImage && <ImageGallery images={images} />}
        {showBtn && <Button onClick={this.handleLoadMore} />}

        {isLoading && <Loader />}
        <Toaster />
      </div>
    );
  }
}



