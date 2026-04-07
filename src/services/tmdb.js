const API_KEY = '44535566cbef7ef2a48ab6a659185162';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    if (!response.ok) throw new Error('Failed to fetch movies');
    const data = await response.json();
    return data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      rating: movie.vote_average,
      releaseDate: movie.release_date,
      poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster',
      genreIds: movie.genre_ids
    }));
  } catch (error) {
    console.error("TMDB API Error:", error);
    throw error;
  }
};

export const fetchGenres = async () => {
    try {
      const response = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
      if (!response.ok) throw new Error('Failed to fetch genres');
      const data = await response.json();
      return data.genres;
    } catch (error) {
      console.error("TMDB Genre Error:", error);
      return [];
    }
  };
