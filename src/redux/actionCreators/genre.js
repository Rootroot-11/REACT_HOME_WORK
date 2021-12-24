import {
    CLEAR_SEARCH_MOVIE_GENRES,
    SET_GENRES,
    SET_LOADING_GENRES,
    TOGGLE_SEARCH_MOVIE_GENRE
} from "../actionTypes";
import {genresAPI} from "../../services";

const setGenres = payload => ({type: SET_GENRES, payload});
const toggleSearchMovieGenre = payload => ({type: TOGGLE_SEARCH_MOVIE_GENRE, payload});
const clearSearchMovieGenres = () => ({type: CLEAR_SEARCH_MOVIE_GENRES});
const setGenresLoading = payload => ({type: SET_LOADING_GENRES, payload});

const fetchGenres = () =>
    async (dispatch) => {
        dispatch(setGenresLoading(true))
        dispatch(setGenres(await genresAPI.getAll()))
        dispatch(setGenresLoading(false))
    }

export {setGenres, fetchGenres, toggleSearchMovieGenre, clearSearchMovieGenres};
