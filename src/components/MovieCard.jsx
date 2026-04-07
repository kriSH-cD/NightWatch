import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="group relative flex flex-col bg-slate-800/40 rounded-2xl overflow-hidden glass-card animate-fade-in hover:scale-[1.02] transition-transform duration-300">
      <div className="relative aspect-[2/3] overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-3 right-3 glass px-2 py-1 rounded-lg text-sm font-bold flex items-center gap-1">
          <span className="text-yellow-400">★</span> {movie.rating.toFixed(1)}
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white line-clamp-1 mb-2 group-hover:text-indigo-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-slate-400 text-sm line-clamp-2 mb-4 flex-grow">
          {movie.overview}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-slate-500 font-medium">
            {new Date(movie.releaseDate).getFullYear() || 'N/A'}
          </span>
          <button className="text-xs font-semibold px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-all active:scale-95 neon-glow">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
