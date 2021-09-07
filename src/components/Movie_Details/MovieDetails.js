import {useEffect, useState} from "react";

export default function MovieDetails ({ match: { params:{ id } } })  {

    const [user, setUser] = useState({});
    useEffect(()=>{
        getUser(id).then(value => setUser({...value}));
    },[id]);
    return(

        <div>

            {JSON.stringify(user)}

        </div>
    );
}

