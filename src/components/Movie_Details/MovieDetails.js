import {useEffect, useState} from "react";
import {useLocation} from "react-router";

export default function MovieDetails ({ match: { params:{ id } } })  {
    // const {state} = useLocation();
    const [user, setUser] = useState({});
    useEffect(()=>{
        getUser(id).then(value => setUser({...value}));
    },[id]);
    return(

        <div>

            {JSON.stringify(user)}
            {/*{JSON.stringify(state)}*/}

        </div>
    );
}

