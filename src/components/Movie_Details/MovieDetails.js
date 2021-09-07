import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {discoverMovie} from "../../services/service.api/movieService";

export default function MovieDetails ({ match: { params:{ id } } })  {
    // const {state} = useLocation();
    const [user, setUser] = useState({});
    useEffect(()=>{
        discoverMovie(id).then(value => setUser({...value}));
    },[id]);
    return(

        <div>

            {JSON.stringify(user)}
            {/*{JSON.stringify(state)}*/}

        </div>
    );
}

