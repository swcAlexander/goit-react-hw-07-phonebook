import axios from 'axios';
import { toast } from 'react-toastify';

async function fetchGallery({ searchQuery, currentPage, method }) {
  const axiosOptions = {
    method,
    url: 'https://64cb5da4700d50e3c705c791.mockapi.io/contacts/',
    params: {
      q: `${searchQuery}`,
      page: `${currentPage}`,
      per_page: 12,
    },
  };
  try {
    const response = await axios(axiosOptions);
    return response.data;
  } catch {
    toast.info("We're sorry, but you've reached the end of search results.");
  }
}

export default fetchGallery;
