import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {discoverGenre, discoverMovie} from "../../services/service.api/movieService";
import {fetchingGenres, fetchMovies} from "../../redux/actions/actions";
import './Movies.css';

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
            <ul>
                <li id="start"></li>
            </ul>
            {
                users.map(value => <Movie key={value.id} value={value}/>)
            }
            <div>
                <a href="#start"><i></i></a>
                <img className={'image'}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYmoxMIfD17ec4sFJkleK4K_lB4QA6MZBRU3mkzNiRjBYbvKRr6SLZCuffw72GUjSk1Fo&usqp=CAU"
                     alt=""/>
            </div>
        </div>
    );

}