const API_KEY ="2facc57b9cb52d216d0c700f0e290ff7";

const requests={
    fetchTrends: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAnime: `/discover/movie?api_key=${API_KEY}&with_genres=16`, //extra category
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&with_genres=14`, //extra category
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}`,

}
export default requests;