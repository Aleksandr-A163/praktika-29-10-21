import axios from 'axios';


const apiKey = 'a92e1c28ff5839246667e5b68c28f141';
const baseUrl = 'https://api.themoviedb.org/3/trending/movie/day';


export const getImages = (page) => axios.get(`${baseUrl}?api_key=${apiKey}&page=${page}`)

