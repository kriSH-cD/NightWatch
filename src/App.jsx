import React, { useState, useEffect, useMemo } from 'react';
import { fetchPopularMovies, fetchGenres } from './services/tmdb';
import MovieCard from './components/MovieCard';

const App = () => {
  // --- States ---
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [favorites, setFavorites] = useState([]);

  // --- Fetching ---
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [movieData, genreData] = await Promise.all([
          fetchPopularMovies(),
          fetchGenres()
        ]);
        setMovies(movieData);
        setGenres(genreData);
      } catch (err) {
        setError("Unable to load movies. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // --- Logic Using Array Higher-Order Functions ---
  
  // (Milestone 3 Task) Logic for Searching, Filtering, and Sorting must use Array HOFs
  const processedMovies = useMemo(() => {
    let result = [...movies];

    // 1. Searching (HOF: filter)
    if (searchTerm) {
      result = result.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Filtering by Genre (HOF: filter)
    if (selectedGenre !== 'All') {
      result = result.filter(movie => 
        movie.genreIds.includes(parseInt(selectedGenre))
      );
    }

    // 3. Sorting (HOF: sort)
    if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'date') {
      result.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    return result;
  }, [movies, searchTerm, selectedGenre, sortBy]);

  // Handle Theme Toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-theme');
  };

  // --- UI ---
  const renderLoader = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
      <p className="text-indigo-400 font-medium animate-pulse">Scanning the multiverse...</p>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark-theme-bg text-slate-50' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-4 mb-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center neon-glow">
              <span className="text-2xl font-black text-white">N</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              NIGHT<span className="text-indigo-500 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">WATCH</span>
            </h1>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto flex-grow justify-center max-w-xl">
             <div className="relative w-full">
                <input 
                  type="text" 
                  placeholder="Search movies..." 
                  className={`w-full border rounded-full py-2.5 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-slate-500 ${isDarkMode ? 'bg-slate-800/50 border-slate-700/50 text-white' : 'bg-white border-slate-200 text-slate-900 group shadow-sm'}`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500">🔍</span>
             </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-colors ${isDarkMode ? 'glass-card hover:bg-slate-700/50' : 'bg-white border shadow-sm hover:bg-slate-100'}`}
              title="Toggle Theme"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <div className="hidden lg:flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full">
               <span className="text-indigo-400 text-xs font-bold uppercase">Pro</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pb-12">
        
        {/* Controls: Filtering and Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-2 w-full overflow-x-auto hide-scrollbar pb-2">
            <span className="text-sm font-medium text-slate-500 whitespace-nowrap mr-2">FilterBy:</span>
            <button 
              onClick={() => setSelectedGenre('All')}
              className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${selectedGenre === 'All' ? 'bg-indigo-600 text-white shadow-lg' : isDarkMode ? 'bg-slate-800/50 text-slate-400 hover:bg-slate-700' : 'bg-white border text-slate-600 hover:bg-slate-50 shadow-sm'}`}
            >
              All
            </button>

            {genres.slice(0, 5).map(genre => (
              <button 
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id.toString())}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${selectedGenre === genre.id.toString() ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700'}`}
              >
                {genre.name}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
             <span className="text-sm font-medium text-slate-400">SortBy:</span>
             <select 
               className="bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2 text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
               value={sortBy}
               onChange={(e) => setSortBy(e.target.value)}
             >
               <option value="default">Release Date</option>
               <option value="rating">Highest Rated</option>
               <option value="title">Alphabetical (A-Z)</option>
               <option value="date">Newest First</option>
             </select>
          </div>
        </div>

        {/* Dynamic Display of Data */}
        {loading ? renderLoader() : (
          <div className="movie-grid animate-fade-in">
            {processedMovies.length > 0 ? (
              processedMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-xl text-slate-500">No movies match your criteria... Try searching for something else 🌌</p>
              </div>
            )}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl text-center text-red-400">
             ⚠️ {error}
          </div>
        )}
      </main>
      
      {/* Footer (SEO Friendly) */}
      <footer className="border-t border-white/5 py-12 px-6 bg-slate-950/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
             <h2 className="text-xl font-bold mb-2">NIGHTWATCH</h2>
             <p className="text-sm text-slate-500 max-w-xs">Your premium gateway to the world of cinema. Explore popular, trending, and highly-rated movies globally.</p>
          </div>
          <div className="flex gap-10 text-sm font-medium text-slate-400">
             <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
             <a href="#" className="hover:text-indigo-400 transition-colors">Cookies</a>
             <a href="#" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
          <p className="text-xs text-slate-600">© 2026 NightWatch HQ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
