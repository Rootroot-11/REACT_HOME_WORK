import {useEffect, useState} from "react";
import {discoverGenre, discoverMovie} from "./services/service.api/movieService";
import {useDispatch, useSelector} from "react-redux";
import {fetchingGenres, fetchUsers} from "./redux/actions/actions";
// import {Movie} from "./components/selectedMovie/SelectedMovie";

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
        <div>
            {
                users.map(value => < div key={value.id} value={value}></div>)
            }
            <div>
                Genres of Movies:
                {
                    genres.map((genre, i) => <i key={genre?.id || i}> - {genre?.name} -</i>)

                }
            </div>


        </div>

    );
}