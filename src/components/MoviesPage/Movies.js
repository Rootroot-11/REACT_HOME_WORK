import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {Route, Router} from "react-router-dom";
import MovieDetails from "../Movie_Details/MovieDetails";
import {discoverGenre, discoverMovie} from "../../services/service.api/movieService";
import {fetchingGenres, fetchUsers} from "../../redux/actions/actions";

export default function Movies(props) {
    const {match: {url}, history} = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(false)
    const [fetchingBack, setFetchingBack] = useState(false)

    let {users} = useSelector(({rootReducer}) => rootReducer);
    let {genres} = useSelector(({genresReducer}) => genresReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        if (fetching) {
            discoverMovie(currentPage).then(value => {
                dispatch(fetchUsers(value.data))
                setCurrentPage(prevState => prevState + 1)
            })
                .finally(() => {
                    setFetching(false)
                });
        } else if (fetchingBack) {
            discoverMovie(currentPage).then(value => {
                dispatch(fetchUsers(value.data))
                setCurrentPage(prevState => prevState - 1)
            })
                .finally(() => {
                    setFetchingBack(false)
                });
        } else {
            discoverMovie(currentPage).then(value => {
                dispatch(fetchUsers(value.data))
            })
        }
        if (!genres) {
            discoverGenre().then(value => dispatch(fetchingGenres(value.data)))
        }
    }, [fetching, fetchingBack, genres, dispatch]);


    return (

        <div>

            {
                users.map(value => <Movie key={value.id} value={value}/>)
            }
            <Route exact path={`${url}/:id`} component={MovieDetails}/>


        </div>
    );
}