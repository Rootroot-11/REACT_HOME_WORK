import {useEffect, useState} from "react";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {discoverGenre, discoverMovie} from "../../services/service.api/movieService";
import {fetchingGenres, fetchUsers} from "../../redux/actions/actions";
import MovieDetails from "../Movie_Details/MovieDetails";

export default function MoviesInfo() {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

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
        <div>

            {
                users.map(value => <Movie key={value.id} value={value}/>)
            }

            <Route exact path={`${url}/:id`} component={MovieDetails}/>
        </div>
    );
}

