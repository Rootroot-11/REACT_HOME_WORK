import {SET_LOADING_MOVIES, SET_MOVIES, SET_MOVIES_SEARCH, SET_PAGINATION} from "../actionTypes";
import {moviesAPI} from "../../services";

const setMovies = payload => ({type: SET_MOVIES, payload});
const setMoviesLoading = payload => ({type: SET_LOADING_MOVIES, payload});
const setMoviesPagination = (page, totalPages) => ({type: SET_PAGINATION, payload: {page, totalPages}});
const setMoviesSearch = payload => ({type: SET_MOVIES_SEARCH, payload});

const fetch = async (dispatch, apiMethod, ...methodProps) => {
    dispatch(setMoviesLoading(true));
    const {results, page, total_pages} = await apiMethod(...methodProps);
    dispatch(setMovies(results));
    dispatch(setMoviesPagination(page, total_pages));
    dispatch(setMoviesLoading(false));
}

const fetchMoviesByPage = (page) =>
    async (dispatch) => {
        fetch(dispatch, moviesAPI.getByPage, page);
    }

const fetchMoviesBySearch = (page) =>
    async (dispatch, getState) => {
        fetch(dispatch, moviesAPI.searchMovies, getState().movies.search, page)
    }

const fetchMoviesByGenres = (page) =>
    async (dispatch, getState) => {
        fetch(dispatch, moviesAPI.getByGenres, getState().genres.searchGenres, page)
    }

export {setMovies, setMoviesPagination, fetchMoviesByPage, fetchMoviesBySearch, setMoviesSearch, fetchMoviesByGenres};
