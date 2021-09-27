import {FETCH_USERS} from "../actions/actionTypes";


export const rootReducer = (state = {users: []}, action) => {

    switch (action.type) {
        case FETCH_USERS:
            return {...state, users: [...action.payload.results]};
        default:
            return state;
    }
}
