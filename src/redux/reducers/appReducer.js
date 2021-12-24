import {
    SET_THEME,
} from "../actionTypes";


const initialState = {
    theme: JSON.parse(localStorage.getItem('theme'))
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return {...state, theme: action.payload};
        default:
            return state;
    }
}

export default appReducer;
