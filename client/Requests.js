const API_KEY = "68faa3362877b29f19e98f1c9298efd6"

const requests = {
    // All
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,

    // TV Shows 
    fetchOriginals: `/discover/tv?api_key=${API_KEY}`,
    fetchTrendingTv: `/trending/tv/day?api_key=${API_KEY}`,
    fetchTopRatedTv: `/tv/top_rated?api_key=${API_KEY}`,

    // Movies
    fetchOriginalMovies: `/discover/movie?api_key=${API_KEY}`,
    fetchTrendingMovies: `/trending/movie/day?api_key=${API_KEY}`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocuMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
}

export default requests