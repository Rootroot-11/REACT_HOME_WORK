import {useEffect} from "react";
import {discoverMovie} from "./service.api/movieService";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {movies} = state;

    useEffect((id) => {
        discoverMovie().then(value => {
            dispatch({type: 'FETCH_MOVIES', payload: movies});
            console.log(value.data.result)
        });
    }, [])
    return (
        <div>
            {
               movies.map((value) => <div>{movies.name}</div>)}
        </div>
    );
}