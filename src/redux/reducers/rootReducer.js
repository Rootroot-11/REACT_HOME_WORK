import {FETCH_GENRES, FETCH_USERS} from "../actions/actionTypes";


export const rootReducer = (state = {users:[]}, action) => {

    switch (action.type) {
        case FETCH_USERS:
            console.log('case 1', action.payload);
            return {...state, users: [...action.payload]};
        case FETCH_GENRES:
            console.log('case 2', action.payload);
            return {...state, users: [...action.payload]}
        default:
            return state;
    }
}