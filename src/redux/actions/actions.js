import {FETCH_USERS, FETCHING_GENRES, CHANGE_THEME} from "./actionTypes";

const getMovies = (value) => {
    return {type: FETCH_USERS, payload: value}
}

const getGenres = (value) => {
    return {type: FETCHING_GENRES, payload: value}
}

export const setThemeColor = (payload) => ({type:CHANGE_THEME, payload})
export {getMovies, getGenres};
