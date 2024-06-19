// api.js
import axios from 'axios';

const API_KEY = 'f6dc19d200a21d9b334979e870ad9d7a';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default api;

// api.js (add this function)
export  const fetchPopularMovies = async () => {
    try {
      const response = await api.get('/movie/popular');
      console.log(response.data)
      return response.data.results;
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  };
  