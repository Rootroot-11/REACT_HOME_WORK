import {useReducer} from "react";
import reducer from "./reducers/Reducer";

export default function App() {
    let [{a, b}, dispatch] = useReducer(reducer, {a: 0, b: 0});
    return (
        <div>
            <h1>state 1 - {a}</h1>
            <button onClick={() => dispatch({obj: '1', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '1', diya: '-'})}>dec</button>
            <h1>state 1 - {b}</h1>
            <button onClick={() => dispatch({obj: '2', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '2', diya: '-'})}>dec</button>
        </div>
    );
}
