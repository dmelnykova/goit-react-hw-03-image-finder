import { Component } from 'react';
import { getImages } from './ api'; 
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showBtn: null,
    totalPages: 0,
    isSearchPerformed: false,
  };

  async componentDidMount() {
    await this.fetchImages();
  }

  async componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      try {
        this.setState({
          isLoading: true,
          error: null,
        });

        await this.fetchImages();
      } catch (error) {
        console.error('Error fetching images:', error);
        toast.error('Ooops... Try again!');
      } finally {
        this.setState({
          isLoading: false,
        });
      }
    }
  }

  async fetchImages() {
    const { query, page } = this.state;

    try {
      const res = await getImages(query, page);
      const { hits, totalHits } = res;

      this.setState((prevState) => ({
        images: [...prevState.images, ...hits],
        totalPages: Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      toast.error('Ooops... Try again!');
    }
    finally {
    }
  }

  onSubmitData = async (newQuery) => {
    this.setState({
      query: newQuery,
      page: 1,
      images: [],
      isSearchPerformed: true, 
    });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { isLoading, images, totalPages, page, isSearchPerformed } = this.state;

    return (
      <div>
        <SearchBar onSubmitData={this.onSubmitData} />
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery data={images} />}
        {totalPages > page && <Button onLoadMore={this.onLoadMore} />}
        <GlobalStyle />
        <Toaster />
      </div>
    );
  }
}

