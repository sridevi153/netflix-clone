

const requests = {
    fetchTrending: `/trending/all/week?api_key=e73f71436cd86507240a50ed4722dcaf&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=e73f71436cd86507240a50ed4722dcaf&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=e73f71436cd86507240a50ed4722dcaf&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=e73f71436cd86507240a50ed4722dcaf&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=e73f71436cd86507240a50ed4722dcaf&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=e73f71436cd86507240a50ed4722dcaf&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=e73f71436cd86507240a50ed4722dcaf&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=e73f71436cd86507240a50ed4722dcaf&with_genres=99`
}

export default requests;