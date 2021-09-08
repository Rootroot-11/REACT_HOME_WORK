
import {useEffect, useState} from "react";
import {discoverMovie} from "../../services/service.api/movieService";

export default function MovieDetails({ match: { params:{ id } } }) {
    const [user, setUser] = useState({});

    useEffect(()=>{
        discoverMovie(id).then(value => setUser({...value}));
    },[id]);

    return (
        <div>

            {JSON.stringify(user)}


        </div>
    );

}

