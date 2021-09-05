import {useEffect} from "react";
import {discoverGenre, discoverMovie} from "./services/service.api/movieService";
import {useDispatch, useSelector} from "react-redux";
import {fetchGenres, fetchUsers} from "./redux/actions/actions";


export default function App() {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let{users} = state;

    useEffect(() => {
        discoverMovie().then(value => {
            dispatch(fetchUsers(value));
        });
    }, [])

    useEffect(() => {
        discoverMovie().then(value => {
            dispatch(fetchGenres(value));
        });
    }, [])

    return (
        <div>
            {
                users.map((value) => <div key={value.id}>
                    <h3>ID</h3> {value.id}
                    <h3>Original language</h3> {value.original_language}
                    <h3>Original title</h3> {value.original_title}
                    <h3>Overview</h3> {value.overview}
                    <h3>Popularity</h3> {value.popularity}
                    <h3>Release date</h3> {value.release_date}
                    <img src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt={`${value.original_title}`}/>


                    <h3>Genres</h3> {value.genre_ids}
                    <hr/>
                    <br/>

                </div>)
            }

        </div>
    );
}