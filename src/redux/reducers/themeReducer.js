const initialState = {light_theme: false}

export const themeReducer = (state = {light_theme: []}, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {...state, light_theme: [...action.payload.light_theme]};
        default:
            return state
    }
}
