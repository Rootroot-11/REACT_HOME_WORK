
import {Link, Route} from "react-router-dom";
import MovieDetails from "../Movie_Details/MovieDetails";

export const Movie = ({item, history, value}) => {

    let navigate = () => {
        history.push('/users/' + item.id, value)
    };

    return (
        <div className={'Movie'}>
            <div className={'Movie-box'}>

                <Link to={{pathname: '/movies/' + value.id}}><h3>{value.title}</h3></Link>

                {/*<Route path={'/movies/' + item.id} component={MovieDetails}/>*/}
            </div>
        </div>
    )
}

