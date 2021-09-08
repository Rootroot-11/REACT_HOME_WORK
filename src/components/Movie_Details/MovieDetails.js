
import {useEffect, useState} from "react";
import {getMovieById} from "../../services/service.api/movieService";
import GenreBadge from "../AllGenres/AllGenres";

export default function MovieDetails({ match: { params:{ id } } }) {
    // const [user, setUser] = useState([]);
    const [movieByID, setMovieById] = useState([]);

    useEffect(()=>{
        getMovieById(id).then(value => setMovieById({...value.data}));
    },[id]);

    return (
        <div>
                <div>
                    <h1>{movieByID.title}</h1>
                    <img src={`https://image.tmdb.org/t/p/w500${movieByID.poster_path}`} alt='Poster'
                         className={'Poster_m'}/>
                    
                    <h3>{movieByID.original_language}</h3>
                    <h3>{movieByID.original_overview}</h3>
                    <h3>{movieByID.popularity}</h3>
                    <h3>{movieByID.release_date}</h3>
                    <h3><GenreBadge array={movieByID.genres}/></h3>
                </div>

            {/*{JSON.stringify(user)}*/}


        </div>
    );

}

