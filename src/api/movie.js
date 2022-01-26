import axios from "axios";


const apiKey = 'a4999a28333d1147dbac0d104526337a';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
// const topratedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
// const genreUrl = `${url}/genre/movie/list`;
// const moviesUrl = `${url}/discover/movie`;
// const personUrl = `${url}/trending/person/week`;


export const getMovies = async () => {
    const response = await axios.get(`${url}/discover/movie?api_key=0e0361a1e4feb360695e2fc32793d846&language=en-US&sort_by=popularity.desc&page=1`)
    return response;
}
export const getSearchMovies = async (searchFor) => {
    console.log("searchFor",searchFor);
    const response = await axios.get(`${url}/search/movie?api_key=0e0361a1e4feb360695e2fc32793d846&query=${searchFor}&page=1`)
    return response;
}

export const getNowPlaying = async () => {
    try {
    const response = await axios.get(nowPlayingUrl, {
        params: {
            api_key: apiKey,
            language: 'en_US',
            page: 1
        }
    })
    // console.log('response',response.data.results);
    return response;
 } catch (error) { 
    console.log('fetching now playing movie data error',error);
}
}


export const gethMovieDetail = async (id) => {
    try {
        console.log("id",id);
        const response = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        return response;
    } catch (error) { 
        console.log('fetching movie data error',error);
    }
}
