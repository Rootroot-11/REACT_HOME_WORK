import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGVmNWI3ZDBhMDU5NjI4ZWM3MGVjMWM3ZTRmZGI5ZSIsInN1YiI6IjYxMzI0NWYyMmNkZTk4MDA2MmQwMmQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2PMdF3aRUJbDRQcZrDGQ4nXk6K3KOJWWXxwdGSwHHHs'
    }
});

const discoverMovie = async () => await instance.get('discover/movie');
const discoverGenre = async () => await instance.get('genre/movie/list');
const getMovieByid = async (movieId) => await instance.get(`/movie/${movieId}`);


export {discoverMovie, discoverGenre, getMovieByid};