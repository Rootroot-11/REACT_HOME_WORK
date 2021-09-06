import {FETCH_USERS, FETCHING_GENRES} from "./actionTypes";

const fetchUsers = (value) => {
    return {type: FETCH_USERS, payload: value}
}

const fetchingGenres = (value) => {
    return {type: FETCHING_GENRES, payload: value}
}
export {fetchUsers, fetchingGenres};

