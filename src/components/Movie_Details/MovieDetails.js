import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {discoverMovie, getMovieByid} from "../../services/service.api/movieService";
import {Route, Router} from "react-router-dom";

export default function MovieDetails ({ match: { params:{ id } } })  {
    // const {state} = useLocation();
    const [movieByID, setMovieByid] = useState({});
    useEffect(()=>{
        getMovieByid(id).then(value => setMovieByid({...value.data}));
    },[id]);

    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieByID.backdrop_path})`
    return(
        <Router>
        <div>

            <Route exact path={'/movies/'} component={MovieDetails}/>
            <h1>{movieByID.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movieByID.poster_path}`} alt='Poster'/>
            <p>FJDIVJCVJ</p>

        </div>
        </Router>
    );
}

