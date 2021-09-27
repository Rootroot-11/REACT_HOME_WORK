import './Simpson.css';
import {useState} from "react";


export default function Simpson(props) {
    let {item:{name, surname, age, info, photo}} = props;
    let [toggle, setToggle] = useState('show')

    return (
        <div>
            <h2>{name} {surname}. Age - {age}</h2>
            <img src={photo} alt=""/>
            <p className={toggle}>
                {info}
            </p>
            <button onClick={()=> {
                if (toggle === 'hide'){
                    setToggle('show')
                } else  if (toggle === 'show'){
                    setToggle('hide')
                }

            }
            }>
                hide/show info</button>
        </div>
    );
}