import {useEffect, useState} from "react";
import {discoverGenre, discoverMovie} from "./services/service.api/movieService";
import {useDispatch, useSelector} from "react-redux";
import {fetchingGenres, fetchUsers} from "./redux/actions/actions";
import MoviesListCard from "./components/MoviesPage/MoviesPage";

import {BrowserRouter as Router, Link, Route,} from "react-router-dom";
import {Movie} from "./components/MovieInfoPage/MovieInfoPage";

// import './App.css'

export default function App() {

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
            <div className={'App'}>
                {
                    users.map(value => <Movie key={value.id} value={value}/>)


                }

                <div>
                    Genres of Movies:
                    {
                        genres.map((genre, i) => <i key={genre?.id || i}> - {genre?.name} -</i>)

                    }
                </div>



            <Link to={'/movies/' + value.id}> <Link/>

            </div>
        </Router>

);
}