import {useSelector} from "react-redux";
import {Link, Route} from "react-router-dom";
import MovieDetails from "../Movie_Details/MovieDetails";

export const Movie = ({item}) => {

    const {genres} = useSelector(({genresReducer}) => genresReducer)

    const genresForOneMovie = item.genre_ids.map(value => genres?.find(genre => genre.id === value));


    return (
        <div className={'Movie'}>
            <div className={'Movie-box'}>
                {item.id} {item.title} - <Link to={{pathname: '/posts/' + item.id, state: item}}>post static details</Link>

                <Route path={'/posts/' + item.id} component={MovieDetails}/>
            </div>
        </div>
    )
}