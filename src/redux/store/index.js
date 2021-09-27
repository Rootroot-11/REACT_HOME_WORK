import {createStore} from "redux";
import {combinesReducer} from "../reducers/combineReducer";


export const store = createStore(combinesReducer);