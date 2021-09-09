import {Link} from "react-router-dom";
import StarsRating from "../StarsRating/StarsRating";


export const Movie = ({value}) => {


    return (
        <div className={'Movie'}>
            <div>

                <Link to={{pathname: '/movies/' + value.id}}><h3> {<img
                    src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
                    alt={`${value.original_title}`}/>} {value.title}</h3>
                </Link>
                <div><StarsRating item={value}/></div>

            </div>
        </div>
    )
}

