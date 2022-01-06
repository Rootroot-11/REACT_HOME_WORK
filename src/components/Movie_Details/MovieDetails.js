import {useEffect, useState} from "react";
import {getMovieById} from "../../services/service.api/movieService";
import AllGenres from "../AllGenres/AllGenres";

export default function MovieDetails({match: {params: {id}}}) {
    const [movieByID, setMovieById] = useState([]);

    useEffect(() => {
        getMovieById(id).then(value => setMovieById({...value.data}));
    }, [id]);

    return (
        <div>
            <div>
                <h1>{movieByID.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${movieByID.poster_path}`} alt='Poster'
                     className={'Poster_m'}/>
                <h3>Original language: {movieByID.original_language}</h3>
                <h3>Overview: {movieByID.overview}</h3>
                <h3>Popularity: {movieByID.popularity}</h3>
                <h3>Release date: {movieByID.release_date}</h3>
                <h3><AllGenres genres_array={movieByID.genres}/></h3>
                <h3>Vote count: {movieByID.vote_count}</h3>
            </div>
        </div>
    );

}

