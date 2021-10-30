import {FETCH_USERS, FETCHING_GENRES, CHANGE_THEME} from "./actionTypes";

const fetchMovies = (value) => {
    return {type: FETCH_USERS, payload: value}
}

const fetchingGenres = (value) => {
    return {type: FETCHING_GENRES, payload: value}
}

export const setThemeColor = (payload) => ({type:CHANGE_THEME, payload})
export {fetchMovies, fetchingGenres};