import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotification = ({ text }) => <h1>Something went wrong: {text}</h1>;

ErrorNotification.propTypes = {
  text: PropTypes.shape({}).isRequired,
};

export default ErrorNotification;
