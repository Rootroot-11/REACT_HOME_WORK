import {FETCHING_GENRES} from "../actions/actionTypes";


export const genresReducer = (state = {genres: []}, action) => {
    switch (action.type) {
        case FETCHING_GENRES:
            return {...state, genres: [...action.payload.genres]};
        default:
            return state;
    }
}