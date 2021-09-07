import {useEffect, useState} from "react";
import {discoverGenre, discoverMovie} from "./services/service.api/movieService";
import {useDispatch, useSelector} from "react-redux";
import {fetchingGenres, fetchUsers} from "./redux/actions/actions";
import MoviesListCard from "./components/MoviesPage/MoviesPage";

import {BrowserRouter as Router, Link, Route,} from "react-router-dom";
import {Movie} from "./components/MovieInfoPage/MovieInfoPage";
import MoviesInfo from "./components/MoviesPage/Movies";

// import './App.css'

export default function App() {

    // const [currentPage, setCurrentPage] = useState(1);
    // const [fetching, setFetching] = useState(true)
    //
    // let {users} = useSelector(({rootReducer}) => rootReducer);
    // let {genres} = useSelector(({genresReducer}) => genresReducer);
    //
    // let dispatch = useDispatch();


    return (
        <Router>

            <div>
                <Link to={'/movies/' + value.id}> </Link>
            </div>
            <Route path={'/movies'} component={MoviesInfo}/>

        </Router>

);
}