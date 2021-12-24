import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {discoverGenre, discoverMovie} from "../../services/service.api/movieService";
import {fetchingGenres, fetchMovies} from "../../redux/actions/actions";
import './Movies.css';
import {MoviesWrapper} from "./styled";
import {Pagination} from "../../common";

export default function Movies() {

    let {users} = useSelector(({rootReducer}) => rootReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        discoverMovie().then(value => {
            dispatch(fetchMovies(value.data));
        });
    }, [dispatch])

    useEffect((genres) => {
        discoverGenre().then(value => {
            dispatch(fetchingGenres(value.data));
        })
    }, [dispatch])

    return (

        <div>
            <MoviesWrapper>
                {
                    users.map(value => <Movie key={value.id} value={value}/>)
                }

                <Pagination/>
            </MoviesWrapper>

        </div>
    );

}
