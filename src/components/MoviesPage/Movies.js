import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {discoverGenre, discoverMovie} from "../../services/service.api/movieService";
import {fetchingGenres, fetchUsers} from "../../redux/actions/actions";
import {Movie} from "../Movie/Movie";

export default function Movies() {
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true)

    let { users } = useSelector(({rootReducer}) => rootReducer);
    let { genres } = useSelector(({genresReducer}) => genresReducer);
    const dispatch = useDispatch();


    return (

        <div className="Movies">

            {
                users.map(value => <Movie key={value.id} value={value}/>)
            }

        </div>
    );
}