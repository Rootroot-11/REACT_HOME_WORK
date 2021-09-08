import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../Movie/Movie";
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
        discoverMovie().then(value => {
            dispatch(fetchUsers(value.data));
        });
    }, [dispatch])


    useEffect((genres) => {
        discoverGenre().then(value => {
            dispatch(fetchingGenres(value.data));
        })
    }, [dispatch])

    return (

        <div>

            {
                users.map(value => <Movie key={value.id} value={value}/>)
            }

        </div>
    );

}