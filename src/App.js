// є об'єкт, значення якого 0
// Стоврити 2 кнопки.
//     Перша збільшує   значення на 10
// Друга зменшує на 2.
//
// Зміну стану та виведення реалізувати через reducer

import {useReducer} from "react";
import reducer from "./components/Reducer";

export default function App() {
    let [{a}, dispatch] = useReducer(reducer, {a: 0});

  return (
    <div>
        <h1>state 1 - {a}</h1>
        <button onClick={() => dispatch({obj: '1', diya: '+'})}>inc</button>
        <button onClick={() => dispatch({obj: '1', diya: '-'})}>dec</button>
    </div>
  );
}

