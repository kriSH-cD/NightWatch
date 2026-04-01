import React from 'react'
const ApiFetch = async () => {
        let api = await fetch('https://api.themoviedb.org/3/search/movie?api_key=44535566cbef7ef2a48ab6a659185162&query=superman')
        let data = await api.json()
        const movie = data.results[0]
        const transformMovie = (movie) => {
        return {
        id: movie.id,
        title: movie.original_title,
        overview: movie.overview,
        language: movie.original_language,
        genres: movie.genre_ids,
        rating: movie.vote_average,
        poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null,
        }
        }
        transformMovie(movie)
        console.log(transformMovie)
        return  
}
export default ApiFetch