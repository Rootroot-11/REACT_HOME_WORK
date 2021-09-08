import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Movie} from "../Movie/Movie";
import {Route, Router} from "react-router-dom";
import MovieDetails from "../Movie_Details/MovieDetails";

export default function Movies(props) {
    const {match: {url}, history} = props;
}
const [currentPage, setCurrentPage] = useState(1);
const [fetching, setFetching] = useState(true)

let {users} = useSelector(({rootReducer}) => rootReducer);
let {genres} = useSelector(({genresReducer}) => genresReducer);
const dispatch = useDispatch();


return (

    <div>

        {
            users.map(value => <Movie key={value.id} value={value}/>)
        }
        <Route exact path={`${url}/:id`} component={MovieDetails}/>

    </div>

);
}