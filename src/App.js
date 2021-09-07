import {useEffect, useState} from "react";
import {discoverGenre, discoverMovie} from "./services/service.api/movieService";
import {useDispatch, useSelector} from "react-redux";
import {fetchingGenres, fetchUsers} from "./redux/actions/actions";
import {
    BrowserRouter as Router, Link,
    Route, Switch
} from "react-router-dom";
import MovieDetails from "./components/Movie_Details/MovieDetails";
import Movies from "./components/MoviesPage/Movies";

// import './App.css'

export default function App({value}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)

    let {users} = useSelector(({rootReducer}) => rootReducer);
    let {genres} = useSelector(({genresReducer}) => genresReducer);

    let dispatch = useDispatch();

    useEffect(() => {
        discoverMovie().then(value => {
            dispatch(fetchUsers(value.data));
        });
    }, [dispatch])


    useEffect((genres) => {
        discoverGenre().then(value => {
            dispatch(fetchingGenres(value.data));
        })
    }, [dispatch])

    useEffect(() => {
        if (fetching) {
            discoverMovie(currentPage).then(value => {
                dispatch(fetchUsers(value.data))
                setCurrentPage(prevState => prevState + 1)
            })
                .finally(() => setFetching(false));
        }
        if (!genres) {
            discoverGenre().then(value => dispatch(fetchingGenres(value.data)))
        }
    }, [dispatch, fetching, genres]);
    return (
        <Router>
            <div>
                {
                    users.map(value => <div key={value.id}>
                        <h3>ID</h3> {value.id}
                        <h3>Original language</h3> {value.original_language}
                        <h3>Original title</h3> {value.original_title}
                        <h3>Overview</h3> {value.overview}
                        <h3>Popularity</h3> {value.popularity}
                        <h3>Release date</h3> {value.release_date}
                        <img src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
                             alt={`${value.original_title}`}/>
                        <h3>Genres</h3> {value.genre_ids}

                        <hr/>
                        <br/>
                    </div>)
                }
                <div>
                    Genres of Movies:
                    {
                        genres.map((genre, i) => <div key={genre?.id || i}> - {genre?.name} -</div>)

                    }
                </div>


            </div>
            <Switch>
                <Link to={{pathname: '/movies/'}}><h2>{value}</h2></Link>

                <Link to={{pathname: '/movie'}}><h2>{value}</h2></Link>

            </Switch>


        </Router>

    );
}