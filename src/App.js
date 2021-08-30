// стоврити об'єкт {a:0,b:0,c:0}
// Стоврити 6 кнопок.
//     по дві на кожен з параметрів об'єкту.
// одна кнопка збільшує значення , інша зменшує
// логіку реалізувати через reducer

import {useReducer} from "react";
import reducer from "./reducers/Reducer";

export default function App() {
    let [{a, b, c}, dispatch] = useReducer(reducer, {a: 0, b: 0, c: 0});
    return (
        <div>
            <h1>state 1 - {a}</h1>
            <button onClick={() => dispatch({obj: '1', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '1', diya: '-'})}>dec</button>
            <h1>state 2 - {b}</h1>
            <button onClick={() => dispatch({obj: '2', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '2', diya: '-'})}>dec</button>
            <h1>state 3 - {c}</h1>
            <button onClick={() => dispatch({obj: '3', diya: '+'})}>inc</button>
            <button onClick={() => dispatch({obj: '3', diya: '-'})}>dec</button>
        </div>
    );
}
