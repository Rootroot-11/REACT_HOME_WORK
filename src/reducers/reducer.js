const reducer = (state, action) => {
    switch (action.type) {
        case 'GET USERS':
            let users = action.payload;
            return {...state, users: users}

        case 'SAVE_USER':
            let user = action.payload;
            // state.users.push(user);
            return {...state}
        default:
            return {...state}
    }
}
export default reducer;