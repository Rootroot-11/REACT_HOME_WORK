import {createStore} from "redux";
// import {rootReducer} from "../../reducers/rootReducer";
import {combinesReducer} from "../../reducers/combineReducer";


export const store = createStore(combinesReducer);
