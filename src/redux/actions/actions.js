import {FETCH_USERS} from "./actionTypes";

const fetchUsers = (value) => {
    return {type: FETCH_USERS, payload: value.data.results}
}
export {fetchUsers};
