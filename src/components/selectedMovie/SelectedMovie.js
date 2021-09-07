import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import {useSelector} from "react-redux";
import AllGenres from "../AllGenres/AllGenres";

export const Movie =
    ({value}) => {
        let {genres} = useSelector(({genresReducer}) => genresReducer)

        const genresForOneMovie = value.genre_ids.map(value => genres?.find(genre => genre.id === value));

        return (
            <div>
                <div>
                    <Link to={{pathname: '/movie/' + value.id}}><h3>value.title</h3></Link>

                    <div>
                        <AllGenres array={genresForOneMovie}/>
                    </div>
                </div>
            </div>
        )


    }
