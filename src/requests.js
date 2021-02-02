const API_KEY = 'f01e53bea00e022b96792714bae93ca9';

const requests ={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals:`/trending/all/day?api_key=${API_KEY}`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchWarMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;