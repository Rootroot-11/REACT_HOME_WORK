import {themeReducer} from "./themeReducer";
import {combineReducers} from "redux";

export const RootReducer = combineReducers({themeReducer});

import appReducer from "./appReducer";

export default combineReducers({
    app: appReducer
});
