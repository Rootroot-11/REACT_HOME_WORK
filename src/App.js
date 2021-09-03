import {useEffect} from "react";
import {discoverMovie} from "./service.api/movieService";
import {useSelector} from "react-redux";

export default function App() {
    let state = useSelector(state => state);
    console.log('app',state)
    let {movies} = state;
    console.log(movies);
    useEffect(() => {
discoverMovie().then(value => console.log(value.data.results))
    },[])
    return (
        <div>

        </div>
    );
}