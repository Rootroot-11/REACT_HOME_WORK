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

                <Switch>
                    <Route exact path={'/movies/:id'} component={MovieDetails}/>
                    <Route exact path={'/movies'} component={Movies}/>
                    <Redirect exact to="/movies"/>
                </Switch>

        </Router>
    )

}