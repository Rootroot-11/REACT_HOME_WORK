import {useSelector} from "react-redux";
import {Link, Route} from "react-router-dom";
import MovieDetails from "../Movie_Details/MovieDetails";

export const Movie = ({item, history}) => {

    let navigate = () => {
        history.push('/users/' + item.id, item)
    };

    // const {genres} = useSelector(({genresReducer}) => genresReducer)



    return (
        <div className={'Movie'}>
            <div className={'Movie-box'}>
                {item.id} {item.title} - <Link to={{pathname: '/posts/' + item.id, state: item}}>post static details</Link>
                <button onClick={navigate}>user details programmaticly</button>

                <Route path={'/movies/' + item.id} component={MovieDetails}/>
            </div>
        </div>
    )
}

