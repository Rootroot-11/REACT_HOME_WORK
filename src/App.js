import {useEffect} from "react";
import {discoverMovie} from "./service.api/movieService";

export default function App() {

    useEffect(() => {
discoverMovie().then(value => console.log(value.data.results))
    },[])
    return (
        <div>

        </div>
    );
}