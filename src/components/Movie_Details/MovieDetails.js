import { useLocation } from "react-router";

export default function MovieDetails({users}) {

    const {state} = useLocation();

    return (
        <div>

            {JSON.stringify(state)}

            {
                users.map(value => <div key={value.id}>
                    <h3>ID</h3> {value.id}
                    <h3>Original language</h3> {value.original_language}
                    <h3>Original title</h3> {value.original_title}
                    <h3>Overview</h3> {value.overview}
                    <h3>Popularity</h3> {value.popularity}
                    <h3>Release date</h3> {value.release_date}
                    <img src={`https://image.tmdb.org/t/p/w200${value.poster_path}`}
                         alt={`${value.original_title}`}/>
                    <h3>Genres</h3> {value.genre_ids}
                    <br/>
                    <br/>

                </div>)}

        </div>
    );

}

