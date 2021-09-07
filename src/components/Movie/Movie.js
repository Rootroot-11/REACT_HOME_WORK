import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const Movie = ({value}) => {

    const {genres} = useSelector(({genresReducer}) => genresReducer)

    const genresForOneMovie = value.genre_ids.map(value => genres?.find(genre => genre.id === value));


    return (
        <div className={'Movie'}>
            <div className={'Movie-box'}>
                <div className={'box'}>
                    <div className={'p_item'}>
                        <Link to={{pathname: '/movies/'}}><h3>{value.title}</h3></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}