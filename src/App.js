import {useReducer} from "react";

const reducer = (state, action) => {
    if (action.obj === '1' && action.diya === '+') {
        return {...state, a: state.a++}
    } else if (action.obj === '1' && action.diya === '-') {
        return {...state, a: state.a--}
    } else if (action.obj === '2' && action.diya === '+') {
        return {...state, b: state.b++}
    } else if (action.obj === '2' && action.diya === '-') {
        return {...state, b: state.b--}
    }
}

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
