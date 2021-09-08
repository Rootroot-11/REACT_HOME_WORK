import { useEffect, useState } from "react";
import { discoverGenre, discoverMovie } from "./services/service.api/movieService";
import { useDispatch, useSelector } from "react-redux";
import { fetchingGenres, fetchUsers } from "./redux/actions/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Movies from "./components/MoviesPage/Movies";
import MovieDetails from "./components/Movie_Details/MovieDetails";
import { Redirect } from "react-router";


import './App.css'

export default function App({ value, history }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)

    let {users} = useSelector(({ rootReducer }) => rootReducer);
    let {genres} = useSelector(({ genresReducer }) => genresReducer);

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


    let navigate = () => {
        history.push('/users/' + value.id, value)
    };
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
                        <br/>
                        <br/>

                    </div>)}

                <div>
                    Genres of Movies:
                    {
                        genres.map((genre, i) => <div key={genre?.id || i}> - {genre?.name} -</div>)

                    }
                </div>

                <Switch>
                    <Route exact path={'/movies/:id'} component={MovieDetails}/>
                    <Route exact path={'/movies'} component={Movies}/>
                    <Redirect exact to="/movies"/>
                </Switch>
            </div>

        </Router>
    )
}