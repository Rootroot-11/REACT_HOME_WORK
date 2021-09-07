import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import {useSelector} from "react-redux";

export const Movie = ({value}) => {
    const {genres} = useSelector(({genresReducer}) => genresReducer)

    const genresForOneMovie = value.genre_ids.map(value => genres?.find(genre => genre.id === value));
    return(

        <div className={'Movie'}>
            <img src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt={`${value.original_title}`}/>

            <Link to={{pathname: '/movie/' + value.id}}><h3>{value.title}</h3></Link>
            <div className="MovieInfo">
                {value.overview}
            </div>

        </div>
    );
}

