import {combineReducers} from "redux";
import {rootReducer} from "./rootReducer";
import {genresReducer} from "./genreReducer";

export const combinesReducer = combineReducers({rootReducer, genresReducer});