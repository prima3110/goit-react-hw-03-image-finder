import axios from 'axios';

const API_KEY = '14851549-24cd97af773f84f7f9c937c43';

export const getItems = (searchQuery, page) => {
  return axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export const w = () => null;
