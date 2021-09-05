let genresState = {
    genres: null
};

const genresReducer = (state=genresState, action) => {
    switch (action.type){
        case FETCHING_GENRES:
            return{...state, genres: [...action.payload.genres]}
        default:
            return state;
    }
}