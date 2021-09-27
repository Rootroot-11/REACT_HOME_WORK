
import {FETCH_USERS, FETCHING_GENRES} from "./actionTypes";

const fetchMovies = (value) => {
    return {type: FETCH_USERS, payload: value}
}

const fetchingGenres = (value) => {
    return {type: FETCHING_GENRES, payload: value}
}
export {fetchMovies, fetchingGenres};