import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {discoverGenre} from "../services/service.api/movieService";
import {fetchingGenres} from "../redux/actions/actions";

export default function GenreBadge({array}) {
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {genres} = state;

    useEffect(() => {
        discoverGenre().then(value => {
            dispatch(loadGenres(value.data))
        });
    }, [])
    return (
        <div>
            {
                array.map((genre, i) => <i key={genre?.id || i}>- {genre?.name} -</i>)
            }
        </div>
    );
}