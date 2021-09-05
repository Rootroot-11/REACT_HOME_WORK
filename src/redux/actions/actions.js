import {FETCH_GENRES, FETCH_USERS, FETCHING_GENRES} from "./actionTypes";

const fetchUsers = (value) => {
    return {type: FETCH_USERS, payload: value.data.results}
}
const fetchGenres = (value) => {
    return {type: FETCH_GENRES, payload: value.data.results}
}

const fetchingGenres = (value) => {
    return {type: FETCHING_GENRES, payload: value.data.results}
}
export {fetchUsers, fetchGenres, fetchingGenres};