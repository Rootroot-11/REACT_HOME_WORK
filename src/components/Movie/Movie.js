import {Link} from "react-router-dom";


export const Movie = ({item, history, value}) => {

    let navigate = () => {
        history.push('/users/' + item.id, value)
    };

    return (
        <div>
            <div>

                <Link to={{pathname: '/movies/' + value.id}}><h3>{value.title} - <img
                    src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
                    alt={`${value.original_title}`}/></h3></Link>

            </div>
        </div>
    )
}

