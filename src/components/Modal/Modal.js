import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    id: PropTypes.number.isRequired,
    onClickImage: PropTypes.func.isRequired,
  };

  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.closeOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnEscape);
  }

  closeOnEscape = e => {
    const { onClickImage } = this.props;
    if (e.code !== 'Escape') return;
    onClickImage();
  };

  handleCloseModal = e => {
    const { onClickImage } = this.props;
    if (e.target !== e.currentTarget) return;
    onClickImage();
  };

  render() {
    const { items, id } = this.props;
    const foundImage = items.find(item => item.id === +id);
    return (
      <div
        className={styles.Overlay}
        onClick={this.handleCloseModal}
        role="presentation"
      >
        <div className={styles.Modal}>
          <img src={foundImage.largeImageURL} alt="foundImage" />
        </div>
      </div>
    );
  }
}

export default Modal;
