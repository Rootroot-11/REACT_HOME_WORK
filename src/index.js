import {createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

let initialState = {users: []}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVIES":
            return {...state};
        default:
            return state;
    }
}

export let store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
