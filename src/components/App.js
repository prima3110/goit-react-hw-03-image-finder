import React, { Component } from 'react';
import * as API from '../services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './SearchBar/SearchBar';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import Modal from './Modal/Modal';
import styles from './App.module.css';

class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    pageNumber: 1,
    isModalOpen: false,
    imageId: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber, items } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.pageNumber !== pageNumber
    ) {
      this.onSearch(searchQuery, pageNumber);
    }

    if (prevState.items !== items) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onSearch = (searchQuery, pageNumber) => {
    this.setState({ isLoading: true });
    API.getItems(searchQuery, pageNumber)
      .then(({ data }) =>
        this.setState(prevState => ({
          items: [...prevState.items, ...data.hits],
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() =>
        this.setState({
          isLoading: false,
        }),
      );
  };

  onSubmitSearchBar = text => {
    this.setState({ searchQuery: text, items: [], pageNumber: 1 });
  };

  onClickMore = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };

  openCloseModal = id => {
    const { isModalOpen } = this.state;
    this.setState({ isModalOpen: !isModalOpen, imageId: id });
  };

  render() {
    const { items, isLoading, error, isModalOpen, imageId } = this.state;
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.onSubmitSearchBar} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {items.length > 0 && (
          <ImageGallery items={items} onClickImage={this.openCloseModal} />
        )}
        {items.length > 0 && <Button onClick={this.onClickMore} />}
        {isModalOpen && (
          <Modal
            items={items}
            id={imageId}
            onClickImage={this.openCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
